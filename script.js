// @ts-check

// Events
document.getElementById('letter').addEventListener('click', open_letter);
document.getElementById('triangle-top').addEventListener('click', open_letter);
document.getElementById('letter').addEventListener('click', test);

let letter = document.getElementById('flex-container');
let triangle_top = document.getElementById('triangle-top');
let hearth = document.getElementById('hearth');
let letter_content = document.getElementById('ctn-letter');

function open_letter() {
    letter.style.transform = 'translateY(-10px)';
    triangle_top.style.zIndex = '11';
    triangle_top.style.transform = 'rotateX(1turn)';
    triangle_top.style.top = '35.5px';
    triangle_top.style.filter = 'drop-shadow(1px -3px 0 #c7679f)';
    
    if (triangle_top.style.zIndex == '11') {
        hearth.style.transform = 'translateY(-205px) rotateX(0.5turn)';
        hearth.style.filter = 'drop-shadow(1px 3px 0 #844b94)';
    }
}

function test() {
    if (triangle_top.style.zIndex == '11') {
        letter_content.style.zIndex = '12'
        letter_content.style.transform = 'scale(1.7)';
    }
}
