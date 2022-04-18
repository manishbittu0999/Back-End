const btn = document.getElementById('btn');
function storage(){
    let text = prompt("Enter the text");
    localStorage.setItem("storage", JSON.stringify(text));
}

btn.addEventListener('click', storage);