// const pinInput = prompt('Enter PIN');
// const regExp = /^(0|1|2)\d{13}$/;
// console.log(pinInput.match(regExp) ? 'match' : 'dont match');

const bigBlock = document.querySelector('.big-block');
const smallBlock = document.querySelector('.smaller-block');
const button = document.querySelector('button');
let offset = 0;

const moveBlock = () => {
    offset = offset + 5;
    smallBlock.style.left = `${offset}px`;
    console.log(offset);
    if(offset === 300) {
        return true;
    }
    moveBlock(offset);
}

button.addEventListener('click', (e) => {
    moveBlock(offset);
})
