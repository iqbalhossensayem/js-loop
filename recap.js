//  const : value will not change 
// let : we could be change 
// var : var is also like let but it's old version, so we should not use it.


// if else condition ...
const amount = 50000;

if (amount > 50000) {
    // 5% bonus
    const bonus = amount * 5/100;
    const totalAmount = amount + bonus;
    console.log(`Congratulation! You got 5% Bonus. Here is your Amount: ${totalAmount}`);

    
} else { 


    if(amount > 30000) {
        // 2% bonus
        const bonus = amount * 2 / 100 ;
        const totalAmount = bonus + amount;
        console.log(`Congratulation! You got 2% bonus . Here is your amount: ${totalAmount}`);
    
    }
    else{
        console.log(`Sorry! you are not selected for bonus. your amount is : ${amount}`);
    }
    
    
}


// array 
let num =[12 , 34 ,56, 6, 7, 78];
// index starts with 0 . ex: 0, 1, 2, 3, ..
console.log(`Here will show index of an array : ${num[4]}`);
console.log(`Here will show the length of the array : ${num.length}`);
