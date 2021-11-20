// const axios = require('axios');

const url = 'https://opendata.cbs.nl/ODataApi/OData/84799NED/$metadata#Cbs.OData.WebAPI.UntypedDataSet'
async function getAge() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const {
        k_0Tot15Jaar_8,
        k_15Tot25Jaar_9,
        k_25Tot45Jaar_10,
        k_45Tot65Jaar_11,
        k_65JaarOfOuder_12
    } = data;
    console.log(k_0Tot15Jaar_8);
    console.log(k_15Tot25Jaar_9);
    console.log(k_25Tot45Jaar_10);
    console.log(k_45Tot65Jaar_11);
    console.log(k_65JaarOfOuder_12);
}


console.log("hello");

// fetch('https://opendata.cbs.nl/ODataApi/odata/84799NED/UntypedDataSet?$filter=WijkenEnBuurten%20eq%20%27BU07722110%27')
// .then(res => {
//     console.log(res);
//     if (res.ok) {
//         console.log("succes")
//     } else {
//         console.log("not succesful")
//     }
// })
// .then(data => console.log(data))

axios.get('https://opendata.cbs.nl/ODataApi/odata/84799NED/UntypedDataSet?$filter=WijkenEnBuurten%20eq%20%27BU07722110%27')
    .then(res => {
        const dataset = res.data.value[0];
        console.log(dataset);
        console.log(dataset.k_0Tot15Jaar_8);

        const age1 = parseInt(dataset.k_0Tot15Jaar_8);
        const age2 = parseInt(dataset.k_0Tot15Jaar_8);
        const age3 = parseInt(dataset.k_0Tot15Jaar_8);
        const age4 = parseInt(dataset.k_0Tot15Jaar_8);
        const age5 = parseInt(dataset.k_0Tot15Jaar_8);


        // voorbeeld berekening: (age1 + age2) / (A + B + C + D + E)
  
    });





// fetch('https://opendata.cbs.nl/ODataApi/OData/84799NED/$metadata#Cbs.OData.WebAPI.UntypedDataSet')
// .then(res => res.json()) 
// .then(data => console.log(data))