const y = 12 ;

function sodiac(year,y) {
    console.log(`Your year  : ${year}`);
    let x = year%12 ;
    
    if ( x == 0) {
        console.log(`Sodiac  : Monkey`)
    }if ( x == 1) {
        console.log(`Sodiac  : Rooster`)
    }if ( x == 2) {
        console.log(`Sodiac  : Dog`)
    }if ( x == 3) {
        console.log(`Sodiac  : Pig`)
    }if ( x == 4) {
        console.log(`Sodiac  : Rat`)
    }if ( x == 5) {
        console.log(`Sodiac  : Ox`)
    }if ( x == 6) {
        console.log(`Sodiac  : Tiger`)
    }if ( x == 7) {
        console.log(`Sodiac  : Rabbit`)
    }if ( x == 8) {
        console.log(`Sodiac  : Dragon`)
    }if ( x == 9) {
        console.log(`Sodiac  : Snake`)
    }if ( x == 10) {
        console.log(`Sodiac  : Horse`)
    }if ( x == 11) {
        console.log(`Sodiac  : Sheep`)
    }if ( x < 0 || x > 11) {
        console.log(`Sodiac  : Error!`) 
    }

}

// check
sodiac(1900);
sodiac(2001);
sodiac(1976);