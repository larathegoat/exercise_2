//● A single console.log
//● One for loop
//(Do not use multiple console.log statements outside the loop.)
//Part 2
//Modify the loop to skip all even numbers.
//🧿 (Hint: use a conditional statement.)
//Part 3
//Modify the loop so that it stops when it reaches number 10.
//🧿 (Hint: use a conditional statement.)

array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20] // using the previous array from exercise 1

for (let i = 0; i < array.length; i++) { // loop through the array
    if (array[i] % 2 === 0) {   // check if the number is even or odd
        continue;
    }
    if (array[i] > 10) { // stops the loop when reaches 10
        break;
    }
    console.log(array[i]); // print odd numbers till 10
}