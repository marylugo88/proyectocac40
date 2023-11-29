
# A very simple Flask Hello World app for you to get started with...

#from flask import Flask

#app = Flask(__name__)

#@app.route('/')
#def hello_world():
#    return 'Hello from Flask!'

from flask import Flask, render_template, request, redirect, url_for
from werkzeug.utils import redirect
from flask_migrate import Migrate
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///instance/database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)
migrate = Migrate(app, db)

# Definir el modelo de usuario
class Usuario(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(50), nullable=False)
    correo = db.Column(db.String(100), unique=True, nullable=False)
    contraseña = db.Column(db.String(100), nullable=False)

class Contenido(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100), nullable=False)
    ano_lanzamiento = db.Column(db.Integer, nullable=False)
    descripcion = db.Column(db.String(500), nullable=False)
    genero = db.Column(db.String(20), nullable=True)
    tipo = db.Column(db.String(10), nullable=False)
    duracion = db.Column(db.String(50), nullable=True)
    trailer = db.Column(db.String(200), nullable=True)
    plataforma = db.Column(db.String(50), nullable=True)
    miniatura = db.Column(db.String(200), nullable=True)
    popular = db.Column(db.Boolean, default=False)  # Nuevo campo booleano 'popular'
    tendencia = db.Column(db.Boolean, default=False)  # Nuevo campo booleano 'tendencia'



class Peliculas(Contenido):
    __mapper_args__ = {
        'polymorphic_identity': 'pelicula',
    }

class Series(Contenido):
    __mapper_args__ = {
        'polymorphic_identity': 'serie',
    }

def obtener_contenido_por_id(contenido_id):
    contenido = Contenido.query.get(contenido_id)
    return contenido

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/admin')
def admin():
    return render_template('admin.html')

@app.route('/iframe-peliculas')
def iframepeliculas():
    return render_template('iframe-peliculas.html')

@app.route('/iframe-series')
def iframeseries():
    return render_template('iframe-series.html')

@app.route('/contacto')
def contacto():
    return render_template('contacto.html')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/peliculas')
def peliculas():
    peliculas = Peliculas.query.all()
    ultimas_agregadas = Peliculas.query.filter_by(tipo='pelicula').order_by(Peliculas.id.desc()).limit(5).all()
    peliculas_popular = Peliculas.query.filter_by(popular=True).all()
    peliculas_tendencia = Peliculas.query.filter_by(tendencia=True).all()
    return render_template('peliculas.html', peliculas=peliculas, ultimas_agregadas=ultimas_agregadas, peliculas_popular=peliculas_popular, peliculas_tendencia=peliculas_tendencia)

@app.route('/series')
def series():
    series = Series.query.all()
    ultimas_agregadas = Series.query.filter_by(tipo='serie').order_by(Series.id.desc()).limit(5).all()
    series_popular = Series.query.filter_by(popular=True).all()
    series_tendencia = Series.query.filter_by(tendencia=True).all()
    return render_template('series.html', series=series, ultimas_agregadas=ultimas_agregadas, series_popular=series_popular, series_tendencia=series_tendencia)


@app.route('/registro', methods=['GET', 'POST'])
def registro():
    if request.method == 'POST':
        nombre = request.form['nombre']
        correo = request.form['correo']
        contrasena = request.form['contrasena']  # Corregí la clave aquí

        # Crear un nuevo usuario
        nuevo_usuario = Usuario(nombre=nombre, correo=correo, contraseña=contrasena)

        # Agregar el usuario a la base de datos
        db.session.add(nuevo_usuario)
        db.session.commit()

        return redirect(url_for('usuarios'))

    return render_template('registro.html')

@app.route('/usuarios')
def usuarios():
    usuarios = Usuario.query.all()
    return render_template('usuarios.html', usuarios=usuarios)

@app.route('/agregar_contenido', methods=['GET', 'POST'])
def agregar_contenido():
    if request.method == 'POST':
        tipo_contenido = request.form.get('tipo_contenido', '')

        if tipo_contenido in ['pelicula', 'serie']:
            if tipo_contenido == 'pelicula':
                contenido = Peliculas()
            else:
                contenido = Series()

            contenido.nombre = request.form.get('nombre', '')
            contenido.ano_lanzamiento = request.form.get('ano_lanzamiento', '')
            contenido.descripcion = request.form.get('descripcion', '')
            contenido.genero = request.form.get('genero', '')
            contenido.tipo = tipo_contenido
            contenido.duracion = request.form.get('duracion', '')
            contenido.trailer = request.form.get('trailer', '')
            contenido.plataforma = request.form.get('plataforma', '')
            contenido.miniatura = request.form.get('miniatura', '')

            db.session.add(contenido)
            db.session.commit()

            return redirect(url_for('contenido'))

    return render_template('agregar_contenido.html')

# Vista para mostrar la lista de películas y series
@app.route('/contenido')
def contenido():
    peliculas = Peliculas.query.all()
    series = Series.query.all()
    return render_template('contenido.html', peliculas=peliculas, series=series)

def obtener_opciones_contenidos_desde_db():
    opciones = Contenido.query.all()
    opciones_contenidos = [{'id': opcion.id, 'nombre': opcion.nombre, 'tipo': opcion.tipo} for opcion in opciones]
    return opciones_contenidos


@app.route('/cargar_contenido', methods=['POST'])
def cargar_contenido():
    contenido_id = request.form.get('contenido_id', '')
    contenido = Contenido.query.get(contenido_id)
    opciones_contenidos = obtener_opciones_contenidos_desde_db()

    return render_template('editar_contenido.html', contenido=contenido, opciones_contenidos=opciones_contenidos)


@app.route('/editar_contenido', methods=['GET', 'POST'])
def editar_contenido():
    contenido = None
    opciones_contenidos = obtener_opciones_contenidos_desde_db()

    if request.method == 'POST':
        contenido_id = request.form.get('contenido_id', '')
        contenido = Contenido.query.get(contenido_id)

    return render_template('editar_contenido.html', contenido=contenido, opciones_contenidos=opciones_contenidos)

@app.route('/guardar_cambios/<int:id>', methods=['POST'])
def guardar_cambios(id):
    contenido = Contenido.query.get(id)

    if contenido:
        contenido.ano_lanzamiento = request.form.get('ano_lanzamiento', '')
        contenido.descripcion = request.form.get('descripcion', '')
        contenido.genero = request.form.get('genero', '')
        contenido.duracion = request.form.get('duracion', '')
        contenido.trailer = request.form.get('trailer', '')
        contenido.plataforma = request.form.get('plataforma', '')
        contenido.miniatura = request.form.get('miniatura', '')
        contenido.popular = 'popular' in request.form
        contenido.tendencia = 'tendencia' in request.form

        db.session.commit()

    return redirect(url_for('editar_contenido'))


@app.route('/eliminar_contenido/<int:id>', methods=['POST'])
def eliminar_contenido(id):
    contenido = Contenido.query.get(id)

    if contenido:
        db.session.delete(contenido)
        db.session.commit()

    return redirect(url_for('editar_contenido'))



#if __name__ == '__main__':
#    app.run(debug=True)
