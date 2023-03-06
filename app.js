/*let pi = 3.14;

console.log(2*10*pi)

let name = 'Dawid';
let lastName = 'Piechota';
console.log(name + ' ' +lastName)

name = "Alyson";
lastName= 'Whiteley';
console.log(name + ' ' +lastName)

let person1 = {
    name: 'Dawid',
    lastName: 'Piechota'
};
console.log(person1.name + ' ' + person1.lastName)

let person2 = {
    name: 'Alyson',
    lastName: 'Whiteley'
};
console.log(person2.name + ' ' + person2.lastName)*/

let activeSlideNumber = 1;

let arrowLeft = document.querySelector('.arrow-left');
//console.log(arrowLeft);
let arrowRight = document.querySelector('.arrow-right');
//console.log(arrowRight);

// let dot1 = document.querySelector('#dot1');
// console.log(dot1);
// let dot2 = document.querySelector('#dot2');
// console.log(dot2);
// let dot3 = document.querySelector('#dot3');
// console.log(dot3);

// let slide1 = document.querySelector('#slide1');
// console.log(slide1);
// let slide2 = document.querySelector('#slide2');
// console.log(slide2);
// let slide3 = document.querySelector('#slide3');
// console.log(slide3);

let showNextSlide = () => {
    // activeSlideNumber = activeSlideNumber + 1;

    if(activeSlideNumber === 3){
        activeSlideNumber = 1;
    } else{
        activeSlideNumber = activeSlideNumber + 1;
    }
    showSlide(activeSlideNumber);
}

let showPreviousSlide = () => {
    // activeSlideNumber = activeSlideNumber + 1;

    if(activeSlideNumber === 1){
        activeSlideNumber = 3;
    } else{
        activeSlideNumber = activeSlideNumber - 1;
    }
    showSlide(activeSlideNumber);
}

let hideActiveSlide = () => {
    let activeElement = document.querySelector('.active');
    activeElement.classList.remove('active');
}

let showSlide = (slideNumber) => {
    hideActiveSlide();
    document.querySelector('#slide'+slideNumber).classList.add('active');
}

//let showSlide1 = () => {
    // console.log(slide2.classList);
    // let activeElement = document.querySelector('.active');
    // slide1.classList.remove('active');
    // hideActiveSlide();
    // activeElement.classList.remove('active');
    // slide1.classList.add('active');
    //activeSlideNumber = 1;
    //showSlide(1);
//};

// let showSlide2 = () => {
//     activeSlideNumber = 2;
//     showSlide(2);
// };

// let showSlide3 = () => {
//     activeSlideNumber = 3;
//     showSlide(3);
// };

// dot1.addEventListener('click', showSlide1);
// dot2.addEventListener('click', showSlide2);
// dot3.addEventListener('click', showSlide3);
for(let i = 1;i <= 3; i++) {
    let showSlidei = () => {
        activeSlideNumber = i;
        showSlide(i);
    }
    document.querySelector('#dot'+i).addEventListener('click', showSlidei);
}

arrowRight.addEventListener('click', showNextSlide)
arrowLeft.addEventListener('click', showPreviousSlide)
