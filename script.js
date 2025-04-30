let currentIndex = 0;
const images = document.querySelectorAll('.image-carousel img');
images[currentIndex].classList.add('active');

function changeImage(direction) {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + direction + images.length) % images.length;
    images[currentIndex].classList.add('active');
}

function novaFrase() {
    const frases = [
        "A vida mais persistente e urgente pergunta é: 'O que você está fazendo pelo outro?'",
        "Eu tenho um sonho que um dia esta nação se levantará e viverá o verdadeiro significado de sua crença.",
        "A escuridão não pode expulsar a escuridão; apenas a luz pode fazer isso."
    ];
    const randomIndex = Math.floor(Math.random() * frases.length);
    document.getElementById('frase').innerText = frases[randomIndex];
}