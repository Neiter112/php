let minValue = parseInt(prompt('Минимальное знание числа для игры','-999'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','999'));
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

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

document.getElementById('btnRetry').addEventListener('click', function () { //Кнопка Заново
    minValue = (minValue <= -999) ? minValue = -999 : (minValue >= 999) ? minValue = 999 : minValue;
    maxValue = (maxValue >= 999) ? maxValue = 999 : (maxValue <= -999) ? maxValue = -999 : maxValue;
    answerNumber = Math.floor((parseInt(minValue) + parseInt(maxValue)) / 2);
    orderNumber = 1;
    gameRun = true;

    const orderNumberField = document.getElementById('orderNumberField'); // Скидыввается № Вопроса
    const answerField = document.getElementById('answerField'); 
    
    orderNumberField.innerText = orderNumber;
    answerField.innerText = `Вы загадали число ${answerNumber}?`;
}) 
