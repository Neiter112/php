let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

let hundres = ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];
let teens = ['десять', 'одинадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
let tens = ['','', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
let numbers = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];
let numberInt;
let numberRest;
let numberIntTen;
let numberRestTen;

function numberToWord() { 
    let number = Math.abs(answerNumber);
    let text = '';

    if (number == 0) {
        text = 'ноль';
        return text;
    }
    
    if (number <= 9) {
        text = numbers[number];
        return text;
    }

    if (number >= 100){      
        numberInt = parseInt(number / 100); 
        numberRest = parseInt(number % 100);
        text = hundres[parseInt(numberInt)];
    } else {
        numberRest = parseInt(number);    
    }
    
    if (numberRest >= 10) 
        {
        numberIntTen = parseInt(numberRest / 10); 
        numberRestTen = parseInt(numberRest % 10);
            if (parseInt(numberIntTen) == 1)  
                {
                text += ' ' + teens[parseInt(numberRestTen)];
                return text;      
                } else {
        text += ' ' + tens[parseInt(numberIntTen)];
        } 
        } else
    numberRestTen = parseInt(numberRest);
    text += ' ' + numbers[parseInt(numberRestTen)]; 
    return text;
};

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

document.getElementById('btnOver').addEventListener('click', function () {    // Кнопка больше
    if (gameRun){
        if (answerNumber === maxValue){
            const phraseRandom = Math.round( Math.random() * 3);
            switch (phraseRandom) {
                case 0:
                    answerPhrase = `Вы загадали неправильное число!\n\u{1F914}`;
                    break;

                case 1:
                    answerPhrase = `Я сдаюсь..\n\u{1F92F}`;
                    break;

                case 2:
                    answerPhrase = `Ваша взяла\n\u{1F914}`;
                    break; 

                case 3:
                    answerPhrase = `Так и быть, вы победили!\n\u{1F92F}`;
                    break;    
            }
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round( Math.random() * 3);
            switch (phraseRandom) {
                case 0:
                    answerPhrase = `Вы загадали число ${answerNumber }`;
                    break;

                case 1:
                    answerPhrase = `Это число ${answerNumber }`;
                    break;

                case 2:
                    answerPhrase = `Я думаю, что это число ${answerNumber }`;
                    break; 

                case 3:
                    answerPhrase = `Хах это число ${answerNumber }`;
                    break;    
            }
            answerField.innerText = answerPhrase;
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {   //Кнопка меньше
    if (gameRun){
        if (minValue === answerNumber ) {
            const phraseRandom = Math.round( Math.random() * 3);
            switch (phraseRandom) {
                case 0:
                    answerPhrase = `Вы загадали неправильное число!\n\u{1F914}`;
                    break;

                case 1:
                    answerPhrase = `Я сдаюсь..\n\u{1F92F}`;
                    break;

                case 2:
                    answerPhrase = `Ваша взяла\n\u{1F914}`;
                    break; 

                case 3:
                    answerPhrase = `Так и быть, вы победили!\n\u{1F92F}`;
                    break;    
            }
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber - 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round( Math.random() * 3);
            switch (phraseRandom) {
                case 0:
                    answerPhrase = `Вы загадали число ${answerNumber }`;
                    break;

                case 1:
                    answerPhrase = `Это число ${answerNumber }`;
                    break;

                case 2:
                    answerPhrase = `Я думаю, что это число ${answerNumber }`;
                    break; 

                case 3:
                    answerPhrase = `Хах это число ${answerNumber }`;
                    break; 
            }
            answerField.innerText = answerPhrase;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        answerField.innerText = `Я всегда угадываю\n\u{1F60E}`
        gameRun = false;
    }
})

document.getElementById('btnRetry').addEventListener('click', function () { //Описание работы кнопки заново
        minValue.value = (minValue.value <= -999) ? minValue.value = -999 : (minValue.value >= 999) ? minValue.value = 999 : minValue.value;
        maxValue.value = (maxValue.value >= 999) ? maxValue.value = 999 : (maxValue.value <= -999) ? maxValue.value = -999 : maxValue.value;
        if (parseInt(maxValue.value) < parseInt(minValue.value)) {
            [maxValue.value, minValue.value] = [minValue.value, maxValue.value]; // Значения меняются местами если max меньше min.
        }
        if (isNaN(maxValue.value) || isNaN(minValue.value) || maxValue.value == '' || minValue.value == '') {
            minValue.value = -999;
            maxValue.value = 999;
        }
    answerNumber = Math.floor((parseInt(minValue) + parseInt(maxValue)) / 2);
    orderNumber = 1;
    gameRun = true;

    orderNumberField.innerText = orderNumber;
    answerField.innerText = `Вы загадали число ${answerNumber}?`;

})
