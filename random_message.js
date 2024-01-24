
const randomJoke = () => {
    let joke = Math.floor(Math.random() * 9)
    if (joke === 1 || joke === 8) {
        return ('Two men walk into a bar. Ouch');
    } else if (joke === 2 || joke === 7) {
        return ('What is brown and sticky? A stick');
    } else if (joke === 3 || joke === 6) {
        return ('Why did the cow stop? It couldn\'t moooove');
    } else if (joke === 4 || joke === 5) {
        return ('What do you call a Spanish man with no legs? Gracias');
    }
};

// randomJoke();

const chooseANumber = (name, age, num) => {
    if (num >= 1 && num <= 10) {
        return `Welcome to the fun ${name}. Your random joke of the day is: ${randomJoke()}. You're never too old to enjoy a joke, even at the grand age of ${age}.`;
    } else {
        console.log('Please choose a number between 1 & 10');
    }
};

console.log(chooseANumber('Andy', 30, 3));

// TRYING TO ADD DATA TO OBJECT






