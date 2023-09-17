document.addEventListener('DOMContentLoaded', () => {
    let offset = 0;
    const slider = document.querySelector('.slider');
    const pip = document.querySelector('.pip');
    const pip2 = document.querySelector('.pip2');
    const pip3 = document.querySelector('.pip3');
    const pip4 = document.querySelector('.pip4');
    const one = document.querySelector('.one');
    const two = document.querySelector('.two');
    const three = document.querySelector('.three');
    const four = document.querySelector('.four');
    const sig1 = document.querySelector('.sig_1')
    const sig2 = document.querySelector('.sig_2')
    const sig3 = document.querySelector('.sig_3')
    const sig4 = document.querySelector('.sig_4')
    const textSlider = document.querySelector('.text_and_slider')
    const signa = document.querySelector('.signature')

    pip.addEventListener('click', () => {
        offset = offset + 475;
        if(offset > 0){
            offset = 0;
        }

        slider.style.left = -offset + 'px';

        textSlider.classList.remove('gap-js')

        sig1.style.display = 'inline'
        sig2.style.display = 'none'
        sig3.style.display = 'none'
        sig4.style.display = 'none'

        one.style.display = 'inline'
        two.style.display = 'none'
        three.style.display = 'none'
        four.style.display = 'none'
    });

    pip2.addEventListener('click', () => {
        offset = offset + 950;
        if(offset > 0){
            offset = 50;
        }
        slider.style.left = -offset + 'px';

        signa.classList.add('signa-no-margin')

        sig1.style.display = 'none'
        sig2.style.display = 'inline'
        sig3.style.display = 'none'
        sig4.style.display = 'none'

        one.style.display = 'none'
        two.style.display = 'inline'
        three.style.display = 'none'
        four.style.display = 'none'
    });

    pip3.addEventListener('click', () => {
        offset = offset + 950;
        if(offset > 0){
            offset = 100;
        }
        slider.style.left = -offset + 'px';

        sig1.style.display = 'none'
        sig2.style.display = 'none'
        sig3.style.display = 'inline'
        sig4.style.display = 'none'

        one.style.display = 'none'
        two.style.display = 'none'
        three.style.display = 'inline'
        four.style.display = 'none'
    });

    pip4.addEventListener('click', () => {
        offset = offset + 1525;
        if(offset > 1425){
            offset = 80;
        }
        slider.style.left = -offset + 'px';

        sig1.style.display = 'none'
        sig2.style.display = 'none'
        sig3.style.display = 'none'
        sig4.style.display = 'inline'

        one.style.display = 'none'
        two.style.display = 'none'
        three.style.display = 'none'
        four.style.display = 'inline'
    });

    pip2.addEventListener('mouseenter', () => {
        pip2.style.padding = '12px'; // Увеличиваем padding при наведении
    });

    pip2.addEventListener('mouseleave', () => {
        pip2.style.padding = '10px'; // Возвращаем padding к исходному значению при уходе мыши
    });

    pip.addEventListener('mouseenter', () => {
        pip.style.padding = '12px'; // Увеличиваем padding при наведении
    });

    pip.addEventListener('mouseleave', () => {
        pip.style.padding = '10px'; // Возвращаем padding к исходному значению при уходе мыши
    });

    pip3.addEventListener('mouseenter', () => {
        pip3.style.padding = '12px'; // Увеличиваем padding при наведении
    });

    pip3.addEventListener('mouseleave', () => {
        pip3.style.padding = '10px'; // Возвращаем padding к исходному значению при уходе мыши
    });


    pip4.addEventListener('mouseenter', () => {
        pip4.style.padding = '12px'; // Увеличиваем padding при наведении
    });

    pip4.addEventListener('mouseleave', () => {
        pip4.style.padding = '10px'; // Возвращаем padding к исходному значению при уходе мыши
    });

})