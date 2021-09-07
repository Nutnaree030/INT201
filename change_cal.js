// create banknotes and coins
let money = {b500: 500, b100: 100, b50: 50, b20: 20, c10: 10, c5: 5, c2: 2, c1: 1};
let allPay ;
let cash ;
// let moneyNote = new Object({bcname, value});
// moneyNote.bcname.note = {n500,n100,n50,n20};
// moneyNote.value.values = {500,100,50,20};


change_calculate(1000,10000);
change_calculate(100,500);
change_calculate(252,500);
change_calculate(150,200);
change_calculate(10,100);
change_calculate(12,50);
change_calculate(2,10);


// create function cash 
function change_calculate(allPay,cash){
    // let a = allCost ;
    // let c = cash ;
    let balance = cash - allPay ;
    console.log(`${balance}`);
    
      if (balance>=500) {
        let balances = Math.floor(balance/money.b500.valueOf);
        console.log(`${balances}`+" Notes of "+`${money.b500}`+" Baht");
        balance = balances%500;
    } if (balance>=100) {
        let balances = Math.floor(balance/100);
        console.log(`${balances}`+" Notes of "+`${money.b100}`+" Baht");
        balance = balances%100;
    } if (balance>=50) {
        let balances = Math.floor(balance/50);
        console.log(`${balances}`+" Notes of "+`${money.b50}`+" Baht");
        balance = balances%50;
    } if (balance>=20) {
        let balances = Math.floor(balance/20);
        console.log(`${balances}`+" Notes of "+`${money.b20}`+" Baht");
        balance = balances%20;
    } if (balance>=10) {
        let balances = Math.floor(balance/10);
        console.log(`${balances}`+" Coins of "+`${money.c10}`+" Baht");
        balance = balances%10;
    } if (balance>=5) {
        let balances = Math.floor(balance/5);
        console.log(`${balances}`+" Coins of "+`${money.c5}`+" Baht");
        balance = balances%5;
    } if (balance>=2) {
        let balances = Math.floor(balance/2);
        console.log(`${balances}`+" Coins of "+`${money.c2}`+" Baht");
        balance = balances%2;
    } if (balance>=1) {
        console.log(`${balance}`+" Coins of "+`${money.c1}`+" Baht");
        balance = balance%1;
    } if (balance==0) {
        console.log("Finish");
    }
    // else {console.log("ERROR!");}
    
}     
    
/**     // if (balance >= 500) {
    //     let b = balance/500 ;
    //     // let y = b/500 ;
    //     // if(b%500 == 0) {balance = balance-(y*money.b500);}
    //     console.log(`${b}`+" Notes of "+`${money.b500}`+" Baht");
    //     balance = b%500;
    // } if (balance >= 100) {
    //     let b = balance/100 ;
    //     // if(b%100 == 0) {balance = balance-(y*money.b100);}
    //     console.log(`${b}`+" Notes of "+`${money.b100}`+" Baht");
    //     balance = b%100;
    // } if (balance >= 50) {
    //     let b = balance/50 ;
    //     // if(b%50 == 0) {balance = balance-(y*money.b100);}
    //     console.log(`${b}`+" Notes of "+`${money.b50}`+" Baht");
    //     balance = b%50;
    // } if (balance >= 20) {
    //     let b = balance/20 ;
    //     // if(b%20 == 0) {balance = balance-(y*money.b100);}
    //     console.log(`${b}`+" Notes of "+`${money.b20}`+" Baht");
    //     balance = b%20;
    // } if (balance >= 10) {
    //     let b = balance/10 ;
    //     // if(b%10 == 0) {balance = balance-(y*money.b100);}
    //     console.log(`${b}`+" coins of "+`${money.c10}`+" Baht");
    //     balance = b%10;
    // } if (balance >= 5) {
    //     let b = balance/5 ;
    //     // if(b%5 == 0) {balance = balance-(y*money.b100);}
    //     console.log(`${b}`+" coins of "+`${money.c5}`+" Baht");
    //     balance = b%5;
    // } if (balance >= 2) {
    //     let b = balance/2 ;
    //     // if(b%5 == 0) {balance = balance-(y*money.b100);}
    //     console.log(`${b}`+" coins of "+`${money.c2}`+" Baht");
    //     balance = b%2;
    // } if (balance >= 1) {
    //     let b = balance ;
    //     // if(b%5 == 0) {balance = balance-(y*money.b100);}
    //         console.log(`${b}`+" coins of "+`${money.c1}`+" Baht");
    // } else {
    //     console.log("ERROR!");
    // }
  

    
    //  } if (balance >= 5) {
    //     let b = balance
    //     if (b%2 == 0) {
    //         let y = b/2 ;
    //         console.log(`${y}`+" coins of "+`${money.c2}`+" Baht");
    //     }else if (b%2 == 1) {
    //         console.log(`${b}`+" coins of "+`${money.c1}`+" Baht");
    //     }
    // }
*/    

/**   switch (balance) {
        
        case (balance > 1000) :
            console.log('1000 < balance');
            break;

        case (500 <= balance < 1000) :
            console.log('balance < 1000');
            break;

        case (100 <= balance < 500) :
            console.log('balance < 500');
            break;

        case (50 <= balance < 100) : 
            console.log('balance < 100');
            break;

        case (20 <= balance < 50) : 
            console.log('balance < 50');
            break;

        case (10 <= balance < 20) :
            console.log('balance < 20');
            break;

        case (0 <= balance < 10) : 
            console.log('balance < 10');
            break;

        // default :
        //     console.log("Finished!");
        //     break;
    } */

/**
    switch (balance) {
        case 0 < balance < 10 :
            if(balance<5 && (balance%2)!=0) {
                let y = (balance%2);
                for(y; y = 0; y--){
                    // for(let balance in money) {money.c1;}
                    return 0;
                }            
            }
            if(balance<5 && (balance%2)==2) {
                console.log(0);
            }
            break;
    
        default:
            break;
    } 
function changeC1ToC2(balance) {

}

function n(params) {
    
}
*/