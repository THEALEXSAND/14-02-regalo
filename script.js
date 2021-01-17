// @ts-check

//#region Open Letter
document.getElementById('letter').addEventListener('click', open_letter);
document.getElementById('triangle-top').addEventListener('click', open_letter);
document.getElementById('hearth').addEventListener('click', open_letter)

let letter = document.getElementById('flex-container');
let triangle_top = document.getElementById('triangle-top');
let hearth = document.getElementById('hearth');
let letter_content = document.getElementById('ctn-letter');
let btn_container = document.getElementById('btn-container');

// Titles
let first_title = document.getElementById('first');
let second_title = document.getElementById('second');
let third_title = document.getElementById('third');

function open_letter() {
    first_title.style.opacity = '0';
    letter.style.transform = 'translateY(40px)';
    triangle_top.style.transition = 'transform 300ms'
    triangle_top.style.zIndex = '6';
    triangle_top.style.transform = 'rotateX(1turn) translateY(-110px)';
    triangle_top.style.filter = 'drop-shadow(1px -3px 0 #c7679f)';
    
    if (triangle_top.style.zIndex == '6') {
        hearth.style.zIndex = '5'
        hearth.style.transform = 'translateY(-205px) rotateX(0.5turn)';
        hearth.style.filter = 'drop-shadow(1px 3px 0 #844b94)';
    }

    if (triangle_top.style.transform == 'rotateX(1turn) translateY(-110px)') {
        letter_content.style.animationName = 'open-letter'; 
        btn_container.style.opacity = '1';
        btn_container.style.transition = 'opacity 500ms 25s';
        second_title.style.transition = 'opacity 600ms 25s';
        second_title.style.opacity = '1';
    }
}
//#endregion

//#region Rotate Letter
document.getElementById('arrow-left').addEventListener('click', hide_video_container);
document.getElementById('arrow-right').addEventListener('click', show_video_container);

let arrow_left = document.getElementById('arrow-left');
let arrow_right = document.getElementById('arrow-right');

let p_container = document.getElementById('p-container');
let vid_container = document.getElementById('vid-container');
let final_container = document.getElementById('final-container');

function show_video_container() {
    second_title.style.transition = 'opacity 500ms';
    second_title.style.opacity = '0';
    arrow_left.style.opacity = '1';
    arrow_right.style.opacity = '0'

    if (arrow_left.style.opacity == '1') {
        p_container.style.opacity = '0';
        vid_container.style.opacity = '1';
        letter_content.style.animationName = 'rotate';
        third_title.style.transition = 'opacity 600ms 10s';
        third_title.style.opacity = '1';

    }
}

function hide_video_container() {
    arrow_right.style.opacity = '1';
    arrow_left.style.opacity = '0';

    if (arrow_right.style.opacity == '1') {
        vid_container.style.transition = 'opacity 500ms';
        vid_container.style.opacity = '0';
        letter_content.style.animationName = 'redo-rotate';
        final_container.style.opacity = '1';
    }
}

//#endregion
