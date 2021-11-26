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
        }
        else if (age2 > age1 && age2 > age3 && age2 > age4 && age2 > age5) {
            
            document.getElementById("medianAge").innerHTML = "15-25";
        }
        else if (age3 > age1 && age3 > age2 && age3 > age4 && age3 > age5) {
               
            document.getElementById("medianAge").innerHTML = "25-45";
        }
        else if (age4 > age1 && age4 > age2 && age4 > age3 && age4 > age5) {
            
            document.getElementById("medianAge").innerHTML = "45-65";
        }
        else {
         
            document.getElementById("medianAge").innerHTML = "65+";
        }
  
    });

// show the safety rating in the amenities

ratingNeighbourhood();

    async function ratingNeighbourhood() {
        const response = await fetch('crimiIrisbuurt.csv');
        const data = await response.text();
      

       const rows = data.split('\n');
      

       rows.forEach(elt => {
           const row = elt.split(';');
   
        const numbers = row[1];
      
        console.log(numbers);
       })




     };











    






