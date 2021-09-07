
/*  For ebalanceamine with how to 'use' and remind. */
/* - Change letiable names */
const LEAPY = 4 ;
let testy = 999 ;
let testy = 636 ;
let mybroy = 2004 ;
// let mybroy = 2006 ;

setTimeout(() => {
    // This statement won't start until nebalancet 3 seconds.
    // Be in line with the law which use when...
    // in process, there are some functions that need work like 'Asychronous'.
    console.log("Now, time passed 3 seconds so the process should finish and stop all it works!");
    // During waiting, this will go to stack and callback queue before.
    // And after that, if not only stack is empty but also its time to run,
    // this function will had been run certain very quickly!
}, 3000);

function FindLeapYear(year) {
    let y = year;
    balance = y%LEAPY;
    let leapyear = balance;
    console.log(`${y}`);

    // in if-else case
        // if (leapyear==0) {
        //     console.log(`${leapyear}`+" : This is a leap year!");
        //     console.log("So you can notice that this year has 29 days of February.");   
        // }
        // if (leapyear==1) {
        //     console.log(`${leapyear}`+" : This isn't a leap year.");
        //     console.log("The latest leap year has just passed in the last year!");    
        // }
        // if (leapyear==2) {
        //     console.log(`${leapyear}`+" : This isn't a leap year.");
        //     console.log("Because the latest one had already happened in 2 years ago!");
        // }
        // if (leapyear==3) {
        //     console.log(`${leapyear}`+" : This isn't a leap year.");
        //     console.log("But the nebalancet year will be the newest leap year!");
        //         }
        // else if (leapyear != 1 && leapyear != 2 && leapyear != 3 && leapyear != 0 ) {
        //     console.log("Processes : ERROR!!!");
        // }

    // in switch case
    switch (leapyear) {

        case 0 :
            console.log(`${leapyear}`+" : This is a leap year!");
            console.log("So you can notice that this year has 29 days of February.");
            break;

        case 1 :
            console.log(`${leapyear}`+" : This isn't a leap year.");
            console.log("The latest leap year has just passed in the last year!");
            break;

        case 2 :
            console.log(`${leapyear}`+" : This isn't a leap year.");
            console.log("Because the latest one had already happened in 2 years ago!");
            break;

        case 3 :
            console.log(`${leapyear}`+" : This isn't a leap year.");
            console.log("But the nebalancet year will be the newest leap year!");
            break;

        default:
            console.log("Processes : ERROR!!!");
            break;
    }
}

//test result
FindLeapYear(2021);
// 2021 % 4 = 1
FindLeapYear(2000);
// 2021 % 4 = 0
FindLeapYear(2050);
// 2050 % 4 = 2
FindLeapYear(testy);
// In case 'let' when you has only one in let and the same space,
// it just use only one likes : testy -> 999 % 4 = 3.
// But if you has two same names in let, the result doesn't same the above,
// because the process will choose the latest value let to represent only one,
// so it means that they use the newest for calculation likes : testy -> 636 % 4 = 0.
FindLeapYear(mybroy);
/*
Desprite of 'let' has the process that's not more difference than 'let'.
But when it has two 'let' values in the process and the same space, everything will stop
and show the error told you can't create the same letieables repeat like 'let'.
Lastly, you need to choose only one in let by yourself before start the process again.
So all of them can annotate the difference between 'let' and 'let'
that first one can both update and re-declare,
be opposite with second one which can update but can't declare again.
Anyways, 'const' also has the process likes 'let' 
but it can't do both updating and re-declaring, including it feel like stable.
*/