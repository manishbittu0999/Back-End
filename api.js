const button = document.getElementById('btn');
const image = document.getElementById('image-container');

function fetch(){
    var xhrRequest = new XMLHttpRequest();
    xhrRequest.onload = function(){
        console.log(xhrRequest.response);
        var responseJSON = JSON.parse(xhrRequest.response);
        var imageUrl = responseJSON.message;
        image.setAttribute('src', imageUrl);
    };

    xhrRequest.open('get', 'https://dog.ceo/api/breeds/image/random', true);
    xhrRequest.send();
}

button.addEventListener('click', fetch);