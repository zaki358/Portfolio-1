const screenSize = () => {
    let window_w = window.innerWidth;
    let window_h = window.innerHeight;
    const container = document.querySelector("#l-container");
    container.style.width = window_w + "px";
    container.style.height = window_h + "px";
};
window.addEventListener('resize', screenSize);
window.addEventListener('load',screenSize);


