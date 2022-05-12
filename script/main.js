

const screenSize = (w, h) => {
    const container = document.querySelector("#l-container");
    container.style.width = w + "px";
    container.style.height = h + "px";
    return {
        a: w,
        b: h
    };
};

let angle = 90;

const circumference = (hhh) => {
    let moveElement = document.querySelector('.c-circle__title');
    let radius = (hhh * 0.7) / 2;
    let centerX = radius - 10;
    let centerY = radius - 10;
    let moveX = Math.cos(Math.PI / 180 * angle) * radius + centerX;
    let moveY = Math.sin(Math.PI / 180 * angle) * radius + centerY;
    moveElement.style.left = moveX + "px";
    moveElement.style.top = moveY + "px";
    if (angle < 360) {
        angle++;
    } else {
        angle = 0;
    }
    //console.log(radius);
}

setInterval(() => {
    let window_w = window.innerWidth;
    let window_h = window.innerHeight;
    let { a, b } = screenSize(window_w, window_h);

    circumference(b);
},1000);


// window.addEventListener('resize',() => {
//     let window_w = window.innerWidth;
//     let window_h = window.innerHeight;
//     let{a,b} = screenSize(window_w,window_h);

//     circumference(b);
// });


window.addEventListener('load', screenSize);



    // let window_w = window.innerWidth;
    // let window_h = window.innerHeight;

    //let mainRaius = window_h * 0.7;

