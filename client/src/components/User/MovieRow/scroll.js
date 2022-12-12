let left_btn = document.getElementsByClassName('uil uil-angle-left-b');
let right_btn = document.getElementsByClassName('uil uil-angle-right-b');
let cards = document.getElementsByClassName('cards');

left_btn.addEventListener('click',()=>{
    console.log("right");
    cards.scrollLeft -= 140;
})
right_btn.addEventListener('click',()=>{
    console.log("left");
    cards.scrollLeft +=140;
})