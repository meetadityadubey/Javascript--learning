//for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(element)
}

//nesting in for loop

for (let i = 0; i <= 10; i++) {
    console.log(i);
    if (i == 5) {
        console.log("5 is the best number")
    }
}

//nested for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(`outer loop ${element}`);
    for (let j = 0; j < 10; j++) {
    //    console.log(`inner loop ${j}`)
        console.log(`${i}*${j} = ${i*j}`)
    }
    
}

//for loop in array

const myArray = ['spiderman', 'ironman', 'batman', 'captain america']

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element)
}

for (let i = 0; i <=10; i++) {
    if (i == 5) {
        console.log("5 has been detected")
        break
    }
    console.log(i)
}

for (let i = 0; i <=10; i++) {
    if (i == 5) {
        console.log("5 has been detected")
        continue
    }
    console.log(i)
}