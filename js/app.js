
document.getElementById('open-menu-btn').addEventListener('click', () => {
    if (document.body.classList.contains('closed-menu')) {
        document.body.classList.remove('closed-menu');
    }
    else {
        document.body.classList.add('closed-menu');
    }
})

document.getElementById("button-queue").addEventListener("click", () => {
    let text = document.querySelector('.status-header');
    let icon = document.getElementById("button-queue-i");
    if (text.textContent === 'PAUSED') {
        text.innerHTML = "RUNNING";
        text.style.backgroundColor = "green";
        icon.className = "fas fa-pause";
    }
    else if (text.textContent === 'RUNNING') {
        text.innerHTML = "PAUSED";
        text.style.backgroundColor = "orange";
        icon.className = "fas fa-play";
    }
});

document.getElementById("ok-queue").addEventListener("click", () => {
    let text = document.querySelector(".ok-queue span");
    let icon = document.getElementById("ok-queue-itag");

    if (text.textContent.trim() === "All OK") {
        text.innerHTML = "ERROR";
        icon.className = "fas fa-times";
        icon.style.color = "red";
    }
    else if (text.textContent.trim() === "ERROR"){
        text.innerHTML = "All OK";
        icon.className = "fas fa-check";
        icon.style.color = "green";
    }
});

// document.querySelector(".language-sub div").addEventListener("click", () => {
    

//     let text = document.querySelector(".language-sub div span");
//     let img = document.querySelector(".language-sub div img");

//     defaultText.innerHTML = text.textContent;
//     text.innerHTML = defaultText.textContent;
// })

changeLang = (info) => {
    let defaultText = document.getElementById("language-txt");
    let defaultImg = document.getElementById("language-img");
    let tmpText = defaultText.textContent;
    let tmpImg = defaultImg.src;

    let newText = info.children[1].textContent;
    let newImg = info.children[0].src;

    defaultText.innerHTML = newText;
    newText = tmpText;

    defaultImg.src = newImg;
    newImg.src = defaultImg.src;

}