"use strict";

function startSlider() {
    // резервная функция загрузки скрипта без таймера
    // window.addEventListener('load', function() {
    const images = document.querySelectorAll('img');
    const sliderLine = document.querySelector('.slider-line');

    let count = 0;
    let width;

    const init = () => {
        width = document.querySelector('.slider').offsetWidth;

        sliderLine.style.width = width * images.length + 'px';
        images.forEach(item => {
            item.style.width = width + 'px';
            item.style.height = 'auto';
        });
        rollSlider();
    };

    window.addEventListener('resize', init);
    init();
    document.querySelector('.slider-prev').addEventListener('click', () => {
        count--;
        if (count < 0) {
            count = images.length - 1;
        }
        rollSlider();
    });

    document.querySelector('.slider-next').addEventListener('click', () => {
        count++;
        if (count >= images.length) {
            count = 0;
        }
        rollSlider();
    });

    function rollSlider() {
        sliderLine.style.transform = 'translate(-' + count * width + 'px)';
    }
    // }, false);    
}

setTimeout(startSlider, 1200);