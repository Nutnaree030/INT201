const tometer = 0.0254;
const tokilo = 0.453592;

function findBMI(weight,height){
    w = weight*tokilo ;
    h = height*tometer ;
    let bmi = w/(h*h) ;
    console.log(`Weight: ${weight}`) ;
    // console.log(`${w}`) ;
    console.log(`Height: ${height}`) ;
    // console.log(`${h}`) ;
    console.log(`BMI: ${bmi}`) ;
}

// check
findBMI(36.5,39);
findBMI(130.1,66.53543307);
findBMI(150,88);


