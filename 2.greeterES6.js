const greeter = (myArray, counter) => {
    const greenText = 'Hello';
    for(i of myArray)   
        console.log(`${greenText} ${i}`);
}

console.log("Greeter with ES6 syntax :");
greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'],3);