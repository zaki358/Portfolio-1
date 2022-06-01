let angle = 90;

const circumference = (hhh) => {
    let moveElement = document.querySelector('.p-area__rotate');
    let radius = (hhh * 0.7) / 2;
    let centerX = radius - 75;
    let centerY = radius - 75;
    let moveX = Math.cos(Math.PI / 180 * angle) * radius + centerX;
    let moveY = Math.sin(Math.PI / 180 * angle) * radius + centerY;
    moveElement.style.left = moveX + "px";
    moveElement.style.top = moveY + "px";
    if (angle < 360) {
        angle++;
    } else {
        angle = 0;
    }
}

setInterval(() => {
    let window_h = window.innerHeight;
    circumference(window_h);
},20);


// const screenSize = (w, h) => {
//    const container = document.querySelector("#l-container");
//    container.style.width = w + "px";
//    container.style.height = h + "px";
//    return {
//        a: w,
//        b: h
//    };
// };

//window.addEventListener('load', screenSize);



