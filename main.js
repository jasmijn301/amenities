//Show the median age group in the amenities

axios.get('https://opendata.cbs.nl/ODataApi/odata/84799NED/UntypedDataSet?$filter=WijkenEnBuurten%20eq%20%27BU07722110%27')
    .then(res => {
        const dataAge = res.data.value[0];

        const age1 = parseInt(dataAge.k_0Tot15Jaar_8);
        const age2 = parseInt(dataAge.k_15Tot25Jaar_9);
        const age3 = parseInt(dataAge.k_25Tot45Jaar_10);
        const age4 = parseInt(dataAge.k_45Tot65Jaar_11);
        const age5 = parseInt(dataAge.k_65JaarOfOuder_12);

        if (age1 > age2 && age1 > age3 && age1 > age4 && age1 > age5) {

            document.getElementById("medianAge").innerHTML = "0-15";
        } else if (age2 > age1 && age2 > age3 && age2 > age4 && age2 > age5) {

            document.getElementById("medianAge").innerHTML = "15-25";
        } else if (age3 > age1 && age3 > age2 && age3 > age4 && age3 > age5) {

            document.getElementById("medianAge").innerHTML = "25-45";
        } else if (age4 > age1 && age4 > age2 && age4 > age3 && age4 > age5) {

            document.getElementById("medianAge").innerHTML = "45-65";
        } else {

            document.getElementById("medianAge").innerHTML = "65+";
        }

    });

// show the safety rating in the amenities

ratingNeighbourhood();

async function ratingNeighbourhood() {
    const dataCrimeIrisbuurt = await fetch('crimiIrisbuurt.csv');
    const dataSafety = await dataCrimeIrisbuurt.text();

    const table = dataSafety.split('\n');

    table.forEach(row => {
        const columns = row.split(';');

        const numbers = columns[1];

        console.log(numbers);
    })

    // const crimeTotalIrisbuurt = number1 + number2 + number 3;
    // if (crimeTotalIrisbuurt > 60 ) {
    //     document.getElementById("safetyRating").innerHTML = "1";
    // }
    // else if (crimeTotalIrisbuurt > 48 && crimeTotalIrisbuurt =< 54 ) {
    //     document.getElementById("safetyRating").innerHTML = "2";
    // }
    // else if (crimeTotalIrisbuurt > 42 && crimeTotalIrisbuurt =< 48 ) {
    //     document.getElementById("safetyRating").innerHTML = "3";
    // }
    // else if (crimeTotalIrisbuurt > 36 && crimeTotalIrisbuurt =< 42 ) {
    //     document.getElementById("safetyRating").innerHTML = "4";
    // }
    // else if (crimeTotalIrisbuurt > 30 && crimeTotalIrisbuurt =< 36 ) {
    //     document.getElementById("safetyRating").innerHTML = "5";
    // }
    // else if (crimeTotalIrisbuurt > 24 && crimeTotalIrisbuurt =< 30 ) {
    //     document.getElementById("safetyRating").innerHTML = "6";
    // }
    // else if (crimeTotalIrisbuurt > 18 && crimeTotalIrisbuurt =< 24 ) {
    //     document.getElementById("safetyRating").innerHTML = "7";
    // }
    // else if (crimeTotalIrisbuurt > 12 && crimeTotalIrisbuurt =< 18 ) {
    //     document.getElementById("safetyRating").innerHTML = "8";
    // }
    // else if (crimeTotalIrisbuurt > 6 && crimeTotalIrisbuurt =< 12 ) {
    //     document.getElementById("safetyRating").innerHTML = "9";
    // }
    // else {
    //     document.getElementById("safetyRating").innerHTML = "10";
    // }
 


    
// console.log(dataSafety);
// console.log(table);





// const dataCrimeEindhoven = await fetch("crimiEindhoven.csv");
// const dataSafetyEindhoven = await dataCrimeEindhoven.text();
// const tableEindhoven = dataSafetyEindhoven.split("\n");
// tableEindhoven.forEach(rowEindhoven => {
//     const columnsEindhoven = rowEindhoven.split(";");
//     const numbersEindhoven = columnsEindhoven[1];
// })

// const crimeTotalEindhoven = number1 + number2 + number 3;

// const crimeRatingAmount = crimeTotalEindhoven / 11

// if (crimeTotalIrisbuurt < crimeRatingAmount && crimeTotalIrisbuurt => 0) {
//     document.getElementById("safetyRating").innerHTML = "10";
// } else if (crimeTotalIrisbuurt < crimeRatingAmount * 2 && crimeTotalIrisbuurt => crimeRatingAmount) {
//     document.getElementById("safetyRating").innerHTML = "9";
// }


};