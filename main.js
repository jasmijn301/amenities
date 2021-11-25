const url = 'https://opendata.cbs.nl/ODataApi/OData/84799NED/$metadata#Cbs.OData.WebAPI.UntypedDataSet'

axios.get('https://opendata.cbs.nl/ODataApi/odata/84799NED/UntypedDataSet?$filter=WijkenEnBuurten%20eq%20%27BU07722110%27')
    .then(res => {
        const dataset = res.data.value[0];
        
        // console.log(dataset);
        // console.log(dataset.k_0Tot15Jaar_8);

        const age1 = parseInt(dataset.k_0Tot15Jaar_8);
        const age2 = parseInt(dataset.k_15Tot25Jaar_9);
        const age3 = parseInt(dataset.k_25Tot45Jaar_10);
        const age4 = parseInt(dataset.k_45Tot65Jaar_11);
        const age5 = parseInt(dataset.k_65JaarOfOuder_12);

        if (age1 > age2 && age1 > age3 && age1 > age4 && age1 > age5) {
            console.log(age1);
            document.getElementById("medianAge").innerHTML = "0-15";
        }
        else if (age2 > age1 && age2 > age3 && age2 > age4 && age2 > age5) {
            console.log(age2);
            document.getElementById("medianAge").innerHTML = "15-25";
        }
        else if (age3 > age1 && age3 > age2 && age3 > age4 && age3 > age5) {
            console.log(age3);    
            document.getElementById("medianAge").innerHTML = "25-45";
        }
        else if (age4 > age1 && age4 > age2 && age4 > age3 && age4 > age5) {
            console.log(age4); 
            document.getElementById("medianAge").innerHTML = "45-65";
        }
        else {
            console.log(age5);
            document.getElementById("medianAge").innerHTML = "65+";
        }
  
    });





