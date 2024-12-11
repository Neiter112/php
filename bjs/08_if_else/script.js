let minValue = document.querySelector('.minValue');
let maxValue = document.querySelector('.maxValue');
let answerNumber;
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

// Кнопка больше
document.getElementById('btnOver').addEventListener('click', function (event) { 
    event.preventDefault();
    if (gameRun){
        if (parseInt(minValue.value) == parseInt(maxValue.value)) {
            const phraseRandom = Math.round(Math.random() * 3);
            if (phraseRandom == 0) {
                answerPhrase  = `Вы загадали неправильное число!\n\u{1F914}`;
            } else
            if (phraseRandom == 1) {
                answerPhrase = `Этого не может быть\n\u{1F60E}`;
            } else
            if (phraseRandom == 2) {
                answerPhrase  = `Хмм а может всё-таки оно?\n\u{1F620}`;
            } else
            if (phraseRandom == 3) {
                answerPhrase  = `Вы меня обманываете?\n\u{1F620}`;
            }
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue.value = answerNumber  + 1;
            answerNumber  = Math.floor((parseInt(minValue.value) + parseInt(maxValue.value)) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round(Math.random() * 4);
            if (phraseRandom === 0) {
                answerPhrase  = `Вы загадали число `;
            } else
            if (phraseRandom === 1) {
                answerPhrase = `Заклинаю, это число `;
            } else
            if (phraseRandom === 2) {
                answerPhrase  = `Это число `;
            } else
            if (phraseRandom ===3) {
            answerPhrase  = `Скорее всего это число `;
            } else
            if (phraseRandom == 4) {
            answerPhrase  = `Я считаю, что это число `;
            } 
           answerField.innerText = answerNumber >= 0 ? numberToWord().length < 20 && Math.abs(answerNumber) >= 0 ? `${answerPhrase} ${numberToWord()}?` : `${answerPhrase} ${answerNumber}?` : numberToWord().length < 20 ? `${answerPhrase} минус ${numberToWord()}?` : `${answerPhrase} ${answerNumber}?`;
        }
    }
})

// Кнопка меньше 
document.getElementById('btnLess').addEventListener('click', function (event) { 
    event.preventDefault();
    if (gameRun){
        if ((parseInt(minValue.value) == parseInt(maxValue.value)) || (parseInt(minValue.value) == parseInt(answerNumber))) {
            const phraseRandom = Math.round(Math.random() * 3);
            if (phraseRandom === 0) {
                answerPhrase  = `Вы загадали неправильное число!\n\u{1F914}`;
            } else
            if (phraseRandom === 1) {
                answerPhrase = `Этого не может быть\n\u{1F60E}`;
            } else
            if (phraseRandom === 2) {
                answerPhrase  = `Хмм а может всё таки оно?\n\u{1F620}`;
            } else
            if (phraseRandom === 3) {
                answerPhrase  = `Вы меня обманываете?\n\u{1F620}`;
            }
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue.value = answerNumber  - 1;
            answerNumber  = Math.floor((parseInt(minValue.value) + parseInt(maxValue.value)) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const phraseRandom = Math.round(Math.random() * 4);
            if (phraseRandom === 0) {
                answerPhrase  = `Вы загадали число `;
            } else
            if (phraseRandom === 1) {
                answerPhrase = `Заклинаю, это число `;
            } else
            if (phraseRandom === 2) {
                answerPhrase  = `Это число `;
            } else
            if (phraseRandom === 3) {
                answerPhrase  = `Скорее всего это число `;
            } else
            if (phraseRandom === 4) {
                answerPhrase  = `Я считаю, что это число `;
            } 
            answerField.innerText = answerNumber >= 0 ? numberToWord().length < 20 && Math.abs(answerNumber) >= 0 ? `${answerPhrase} ${numberToWord()}?` : `${answerPhrase} ${answerNumber}?` : numberToWord().length < 20 ? `${answerPhrase} минус ${numberToWord()}?` : `${answerPhrase} ${answerNumber}?`; 
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function (event) {
    event.preventDefault();
    if (gameRun){
        const phraseRandom = Math.round( Math.random() * 3);
        if (phraseRandom == 0) {
            answerPhrase  = `Я всегда угадываю\n\u{1F60E}`;
        } else
        if (phraseRandom == 1) {
            answerPhrase = `Это было легко\n\u{1F60E}`;
        } else
        if (phraseRandom == 2) {
            answerPhrase  = `Бинго!\n\u{1F60E}`;
        } else
        if (phraseRandom == 3) {
            answerPhrase  = `Я знаю всё!\n\u{1F60E}`;
        } 
        answerField.innerText = answerPhrase;
        gameRun = false;
    }
})

function numberToWord() { // Функция преобразования числа из цифр в слова (числа от -999 до 999).
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

document.querySelector('.gamemplay').addEventListener('click', function(event) {
    event.preventDefault();
    minValue.value = (minValue.value <= -999) ? minValue.value = -999 : (minValue.value >= 999) ? minValue.value = 999 : minValue.value;
    maxValue.value = (maxValue.value >= 999) ? maxValue.value = 999 : (maxValue.value <= -999) ? maxValue.value = -999 : maxValue.value;
    if (parseInt(maxValue.value) < parseInt(minValue.value)) {
        [maxValue.value, minValue.value] = [minValue.value, maxValue.value]; 
    }
    if (isNaN(maxValue.value) || isNaN(minValue.value) || maxValue.value == '' || minValue.value == '') {
        minValue.value = -999;
        maxValue.value = 999;
    }
    answerNumber = Math.floor((parseInt(minValue.value) + parseInt(maxValue.value)) / 2);
    orderNumber = 1;
    gameRun = true;

    const orderNumberField = document.getElementById('orderNumberField'); 
    const answerField = document.getElementById('answerField'); 

    orderNumberField.innerText = orderNumber;
    answerField.innerText = answerNumber >= 0 ? numberToWord().length < 20 && Math.abs(answerNumber) >= 0 ? `Вы загадали число ${numberToWord()}?` : `Вы загадали число ${answerNumber}?` : numberToWord().length < 20 ? `Вы загадали число минус ${numberToWord()}?` : `Вы загадали число ${answerNumber}?`;
});

// Кнопка заново
document.getElementById('btnRetry').addEventListener('click', function () { 
    minValue.value = (minValue.value <= -999) ? minValue.value = -999 : (minValue.value >= 999) ? minValue.value = 999 : minValue.value;
    maxValue.value = (maxValue.value >= 999) ? maxValue.value = 999 : (maxValue.value <= -999) ? maxValue.value = -999 : maxValue.value;
    if (parseInt(maxValue.value) < parseInt(minValue.value)) {
        [maxValue.value, minValue.value] = [minValue.value, maxValue.value];
    }
    if (isNaN(maxValue.value) || isNaN(minValue.value) || maxValue.value == '' || minValue.value == '') {
        minValue.value = -999;
        maxValue.value = 999;
    }
    answerNumber = Math.floor((parseInt(minValue.value) + parseInt(maxValue.value)) / 2);
    orderNumber = 1;
    gameRun = true;

    const orderNumberField = document.getElementById('orderNumberField'); 
    const answerField = document.getElementById('answerField'); 

    orderNumberField.innerText = orderNumber;
    answerField.innerText = `Вы загадали число ${answerNumber}?`;
})