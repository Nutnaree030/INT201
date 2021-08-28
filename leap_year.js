
/*  For examine with how to 'use' and remind. */

const leapy = 4 ;
var testy = 999 ;
var testy = 636 ;
let mybroy = 2004 ;
// let mybroy = 2006 ;

setTimeout(() => {
    // This statement won't start until next 3 seconds.
    // Be in line with the law which use when...
    // in process, there are some functions that need work like 'Asychronous'.
    console.log("Now, the process finished and stoped all works!");
    // During waiting, this will go to stack and callback queue before.
    // And after that, if not only stack is empty but also its time to run,
    // this function will had been run certain very quickly!
}, 3000);

function FindLeapYear(year) {
    var y = year;
    x = y%leapy;
    let leapyear = x;
    console.log(`${y}`);

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
            console.log("But the next year will be the newest leap year!");
            break;

        default:
            console.log("Processes : ERROR!!!");
            break;
    }

    setTimeout
}

//test result
FindLeapYear(2021);
// 2021 % 4 = 1
FindLeapYear(2000);
// 2021 % 4 = 0
FindLeapYear(2050);
// 2050 % 4 = 2
FindLeapYear(testy);
// In case 'var' when you has only one in var and the same space,
// it just use only one likes : testy -> 999 % 4 = 3.
// But if you has two same names in var, the result doesn't same the above,
// because the process will choose the latest value var to represent only one,
// so it means that they use the newest for calculation likes : testy -> 636 % 4 = 0.
FindLeapYear(mybroy);
// Desprite of 'let' has the process that's not more difference than 'var'.
// But when it has two 'let' values in the process and the same space, everything will stop
// and show the error told you can't create the same varieables repeat like 'var'.
// Lastly, you need to choose only one in let by yourself before start the process again.
// So all of them can annotate the difference between 'var' and 'let'
// that first one can both update and re-declare,
// be opposite with second one which can update but can't declare again.
// Anyways, 'const' also has the process likes 'let' 
// but it can't do both updating and re-declaring, including it feel like stable. 