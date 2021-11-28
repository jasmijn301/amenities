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
    //Calculate the total crime rate from a certain neighbourhood
    const dataCrimeIrisbuurt = await fetch('crimiIrisbuurt.csv');
    const dataSafetyIrisbuurt = await dataCrimeIrisbuurt.text();

    let countIrisbuurt = 0;
    const tableIrisbuurt = dataSafetyIrisbuurt.split('\n');

    tableIrisbuurt.forEach(rowIrisbuurt => {
        const columnsIrisbuurt = rowIrisbuurt.split(';');

        const numbersIrisbuurt = columnsIrisbuurt[1];

        countIrisbuurt = countIrisbuurt + parseFloat(numbersIrisbuurt);
    })

    const crimeTotalIrisbuurt = countIrisbuurt.toFixed(1);


    //Calculate the total crime rate from Eindhoven
    const dataCrimeEindhoven = await fetch("crimiEindhoven.csv");
    const dataSafetyEindhoven = await dataCrimeEindhoven.text();

    let countEindhoven = 0;
    const tableEindhoven = dataSafetyEindhoven.split("\n");

    tableEindhoven.forEach(rowEindhoven => {
        const columnsEindhoven = rowEindhoven.split(";");

        const numbersEindhoven = columnsEindhoven[1];

        countEindhoven = countEindhoven + parseFloat(numbersEindhoven)
    })

    const crimeTotalEindhoven = countEindhoven.toFixed(1);


    //Calculate what rating the neighbourhood gets if Eindhoven were a 5.5
    const crimeRatingAmount = crimeTotalEindhoven / 11

    if (crimeTotalIrisbuurt <= crimeRatingAmount && crimeTotalIrisbuurt >= 0) {
        document.getElementById("safetyRating").innerHTML = "10";
    } else if (crimeTotalIrisbuurt <= crimeRatingAmount * 3 && crimeTotalIrisbuurt > crimeRatingAmount) {
        document.getElementById("safetyRating").innerHTML = "9";
    } else if (crimeTotalIrisbuurt <= crimeRatingAmount * 5 && crimeTotalIrisbuurt > crimeRatingAmount * 3) {
        document.getElementById("safetyRating").innerHTML = "8";
    } else if (crimeTotalIrisbuurt <= crimeRatingAmount * 7 && crimeTotalIrisbuurt > crimeRatingAmount * 5) {
        document.getElementById("safetyRating").innerHTML = "7";
    } else if (crimeTotalIrisbuurt <= crimeRatingAmount * 9 && crimeTotalIrisbuurt > crimeRatingAmount * 7) {
        document.getElementById("safetyRating").innerHTML = "6";
    } else if (crimeTotalIrisbuurt <= crimeRatingAmount * 11 && crimeTotalIrisbuurt > crimeRatingAmount * 9) {
        document.getElementById("safetyRating").innerHTML = "5";
    } else if (crimeTotalIrisbuurt <= crimeRatingAmount * 13 && crimeTotalIrisbuurt > crimeRatingAmount * 11) {
        document.getElementById("safetyRating").innerHTML = "4";
    } else if (crimeTotalIrisbuurt <= crimeRatingAmount * 15 && crimeTotalIrisbuurt > crimeRatingAmount * 13) {
        document.getElementById("safetyRating").innerHTML = "3";
    } else if (crimeTotalIrisbuurt <= crimeRatingAmount * 17 && crimeTotalIrisbuurt > crimeRatingAmount * 15) {
        document.getElementById("safetyRating").innerHTML = "2";
    } else {
        document.getElementById("safetyRating").innerHTML = "1";
    }


};