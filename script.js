// @ts-check

//#region Open Letter
document.getElementById('letter').addEventListener('click', open_letter);
document.getElementById('triangle-top').addEventListener('click', open_letter);
document.getElementById('hearth').addEventListener('click', open_letter)

let letter = document.getElementById('flex-container');
let triangle_top = document.getElementById('triangle-top');
let hearth = document.getElementById('hearth');
let letter_content = document.getElementById('ctn-letter');

function open_letter() {
    letter.style.transform = 'translateY(-10px)';
    triangle_top.style.zIndex = '11';
    triangle_top.style.transform = 'rotateX(1turn) translateY(-109px)';
    triangle_top.style.filter = 'drop-shadow(1px -3px 0 #c7679f)';
    
    if (triangle_top.style.zIndex == '11') {
        hearth.style.transform = 'translateY(-205px) rotateX(0.5turn)';
        hearth.style.filter = 'drop-shadow(1px 3px 0 #844b94)';
    }

    if (triangle_top.style.transform == 'rotateX(1turn) translateY(-109px)') {
        letter_content.style.zIndex = '12'
        letter_content.style.transform = 'scale(1.8)';
    }
}
//#endregion

//#region Change Content
document.getElementById('arrow-left').addEventListener('click', show)
document.getElementById('arrow-right').addEventListener('click', hide);

let arrow_left = document.getElementById('arrow-left');
let arrow_right = document.getElementById('arrow-right');
let img_container = document.getElementById('img-container');

function hide() {
    arrow_left.style.opacity = '1';
    arrow_right.style.opacity = '0'
    img_container.style.transform = 'translateX(280px)';
    img_container.style.opacity = '0';
}

function show() {
    arrow_right.style.opacity = '1';
    arrow_left.style.opacity = '0';
    if (arrow_left.style.opacity == '0') {
        img_container.style.transition = 'transform 700ms, opacity 500ms 300ms';
        img_container.style.opacity = '1';
        img_container.style.transform = 'translateX(0)';
    }
}

//#endregion
