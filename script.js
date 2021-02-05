// @ts-check

//#region Open Letter
document.getElementById('flex-container').addEventListener('click', open_letter);

let letter = document.getElementById('flex-container');
let triangle_top = document.getElementById('triangle-top');
let hearth = document.getElementById('hearth');
let letter_content = document.getElementById('ctn-letter');
let btn_container = document.getElementById('btn-container');

// Titles
let first_title = document.getElementById('first');
let second_title = document.getElementById('second');
let third_title = document.getElementById('third');
let fourth_title = document.getElementById('fourth');

function open_letter() {
    first_title.style.opacity = '0';
    p_container.style.display = 'block';
    letter.style.transform = 'translateY(50px)';
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
        third_title.style.transition = 'opacity 600ms 120s';
        third_title.style.opacity = '1';

    }
}

function hide_video_container() {
    if (arrow_right.style.opacity == '0') {
        arrow_right.style.opacity = '0';
        arrow_left.style.transition = 'opacity 500ms';
        arrow_left.style.opacity = '0';
        third_title.style.transition = 'opacity 600ms';
        third_title.style.opacity = '0';

        vid_container.style.transition = 'opacity 400ms';
        vid_container.style.opacity = '0';
        letter_content.style.animationName = 'redo-rotate';
        final_container.style.opacity = '1';
        fourth_title.style.transition = 'opacity 500ms 30s';
        fourth_title.style.opacity = '1';
        
    }
}
//#endregion
