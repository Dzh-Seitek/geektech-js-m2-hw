const block = document.querySelector('.block');

const moveBlock = () => {
    block.animate([
        {left: `0px`, top: `0px`},
        {left: `450px`, top: `0px`},
        {left: `450px`, top: `450px`},
        {left: `0px`, top: `450px`},
        {left: `0px`, top: `0px`}
    ], {
        duration: 8000,
    }, setTimeout(moveBlock, 8000))
}

window.addEventListener('load', () => {
    moveBlock();
})


// let count = 0;
// window.addEventListener('load', (e) => {
//     const timer = setInterval(() => {
//         if(count >= 60) {
//             console.log(`Interval cleared at: ${count}`);
//             clearInterval(timer);
//         }else{
//             count++;
//             console.log(count);
//         }
//     }, 1000);
// })
