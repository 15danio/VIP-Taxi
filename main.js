const container = document.querySelector('.scroll-container');
const content = document.querySelector('.scroll-content');
const images = document.querySelectorAll('.scroll-content img');

let scrollposition = 0;
const speed = 10;

function scrollImage(){
    scrollposition += speed;
    if (scrollposition >= images[0].width) {
        scrollposition = 0;
    }
    content.style.transform = `translateX( -${scrollposition}px)`;
}

setInterval(scrollImage,30);