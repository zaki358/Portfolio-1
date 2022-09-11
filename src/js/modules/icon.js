export function setting() {
  let inc = 0;
  let angle = 0;
  let screenSize = window.innerHeight;
  function positioning(el) {
    switch (inc) {
      case 0:
        angle = 270;
        break;

      case 1:
        angle = 315;
        break;

      case 2:
        angle = 0;
        break;

      case 3:
        angle = 45;
        break;

      case 4:
        angle = 90;
        break;

      case 5:
        angle = 135;
        break;

      case 6:
        angle = 180;
        break;

      case 7:
        angle = 225;
        break;

      default:
        break;
    }
    let moveEl = document.querySelector(el);
    let radius = (screenSize * 0.7) / 2;
    let centerX = radius - ((screenSize * 0.1) / 2);
    let centerY = radius - ((screenSize * 0.1) / 2);
    let moveX = Math.cos(Math.PI / 180 * angle) * radius + centerX;
    let moveY = Math.sin(Math.PI / 180 * angle) * radius + centerY;
    moveEl.style.left = moveX + "px";
    moveEl.style.top = moveY + "px";
    moveEl.style.opacity = 0.5;
    inc++;
    console.log(inc);

  }
  return positioning;
}

