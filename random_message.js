
const randomJoke = () => {
    let joke = Math.floor(Math.random() * 8)
    if (joke === 1 || joke === 8) {
        console.log('Two men walk into a bar. Ouch');
    } else if (joke === 2 || joke === 7) {
        console.log('What is brown and sticky? A stick');
    } else if (joke === 3 || joke === 6) {
        console.log('Why did the cow stop? It couldn\'t moooove');
    } else if (joke === 4 || joke === 5) {
        console.log('What do you call a Spanish man with no legs? Gracias');
    }
};

randomJoke();




