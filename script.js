const mouse = document.querySelector('.cursor');
const text = document.querySelector('h1');
const textArr = text.textContent.split('');
text.textContent = '';

document.addEventListener('mousemove', (e) => {
    const x = e.pageX;
    const y = e.pageY;

    mouse.style.left = x + 'px';
    mouse.style.top = y + 'px';
});

//making the text one by one
for (let i = 0; i < textArr.length; i++) {
    text.innerHTML += `<span>${textArr[i]}</span>`

};
const allText = document.querySelectorAll('h1 span');

allText.forEach(text => {
    text.addEventListener('mouseenter', e => {

        e.target.style.animation = '';
        e.target.style.animation = 'textani 2s infinite'

    });
    text.addEventListener('mouseout', e => {
        setTimeout(() => {
            e.target.style.animation = ''
        }, 2500);
    });
})
