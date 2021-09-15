const app = document.getElementById('app');

const avatar = (params) => {
    const fuente = `https://randomuser.me/api/portraits/women/${params.id}.jpg`;
    const nombre = params.nombre;
    return (`<picture>
                <img src="${fuente}" alt="women in tech imge">
                <span>${nombre}</span>
            </picture>`);
}

app.innerHTML += avatar({id:"2", nombre:"Sofia"});
app.innerHTML += avatar({id:"3", nombre:"Andrea"});
app.innerHTML += avatar({id:"4", nombre:"Vanesa"});
app.innerHTML += avatar({id:"5", nombre:"Carla"});
app.innerHTML += avatar({id:"6", nombre:"Manuela"});


console.log(app.querySelectorAll('img'));

app.querySelectorAll('img').forEach(img => {
    img.addEventListener('click', () => img.classList.toggle('desactivado'));
})