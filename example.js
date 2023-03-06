// ctrl + / = batch comment out

let myFirstFunction = (name, greeting) => {
    console.log(greeting + ' ' + 'Mam na imie' + ' ' + name);
};

// let mySecondFunction = () => {
//     console.log('Witaj, Mam na imie Alyson!');
// };

// myFirstFunction('Dawid', 'Hej!');
// myFirstFunction('Alyson', 'Dzien Dobry!');

//BOOL

// let bool = 5 > 10;
// console.log(bool);

// let bool2 = 5 === 5;
// console.log(bool2);

// let bool3 = 1 !== 2;
// console.log(bool3);

// let bool4 = 'Dawid' === 'Dawid';
// console.log(bool4);

// let isBiggerThan10 = (number) => {
//     if(number>10){
//         console.log('It is bigger than 10')
//     }
//     // if(number<=10){
//     //     console.log('It is not bigger than 10')
//     // }
//     else{
//         console.log('It is not bigger than 10')
//     }
// };

// isBiggerThan10(20);
// isBiggerThan10(5);

let circlelength = (radius) => {
    console.log(2*radius*3.14)
}

for(let i = 1; i <=20; i++){ // i++ = increases i by 1
    circlelength(i);
}

