const URL = "https://random.dog/woof.json";

const btnGenerate = document.getElementById('btnGenerate');
const container = document.getElementById('container');

const getDogs = () => {
    fetch(URL)
    .then(res => res.json())
    .then(data => {
        console.log(data);

        const card = document.createElement('div');
        card.setAttribute('class', 'cards');

        const img = document.createElement('img');
        img.setAttribute('src', data.url);
        img.setAttribute('alt', data.fileSizeBytes);
        card.appendChild(img);

        const video = document.createElement('video');
        video.setAttribute('src', data.url);
        video.setAttribute('alt', data.fileSizeBytes);
        video.setAttribute('Autoplay',true);
        video.setAttribute('Loop',true); //Para hacer que los videos se siga reproduciendo.
        video.setAttribute('Muted',true);
        card.appendChild(video);

        container.appendChild(card);
    });
}
btnGenerate.addEventListener('click', getDogs);