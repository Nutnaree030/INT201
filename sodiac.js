const y = 12 ;

function sodiac(year,y) {
    console.log(`Your year  : ${year}`);
    let balance = year%12 ;
    
    if ( balance == 0) {
        console.log(`Sodiac  : Monkey`)
    }if ( balance == 1) {
        console.log(`Sodiac  : Rooster`)
    }if ( balance == 2) {
        console.log(`Sodiac  : Dog`)
    }if ( balance == 3) {
        console.log(`Sodiac  : Pig`)
    }if ( balance == 4) {
        console.log(`Sodiac  : Rat`)
    }if ( balance == 5) {
        console.log(`Sodiac  : Obalance`)
    }if ( balance == 6) {
        console.log(`Sodiac  : Tiger`)
    }if ( balance == 7) {
        console.log(`Sodiac  : Rabbit`)
    }if ( balance == 8) {
        console.log(`Sodiac  : Dragon`)
    }if ( balance == 9) {
        console.log(`Sodiac  : Snake`)
    }if ( balance == 10) {
        console.log(`Sodiac  : Horse`)
    }if ( balance == 11) {
        console.log(`Sodiac  : Sheep`)
    }if ( balance < 0 || balance > 11) {
        console.log(`Sodiac  : Error!`) 
    }

}

// check
sodiac(1900);
sodiac(2001);
sodiac(1976);