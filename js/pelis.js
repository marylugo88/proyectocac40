fetch("https://imdb8.p.rapidapi.com/auto-complete?q=Avengers", {
"method": "GET",
"headers": {
	'X-RapidAPI-Host': 'imdb8.p.rapidapi.com',
    'X-RapidAPI-Key': '017bf554d5msh50f5958cb4c9c5ap1d8a0ajsn04f4d2f803ad'
}
})

.then(response => response.json())
.then(data => {
    const list = data.d;

    list.map((item) => {
        const name = item.l;
        const poster = item.i.imageUrl;
        const movie = `<li><img src="${poster}"> <h2>${name}</h2></li>`
        document.querySelector('.movies').innerHTML += movie;
    })
})
.catch (err =>  {
	console.error(err);
});