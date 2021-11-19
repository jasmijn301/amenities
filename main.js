const url = 'https://opendata.cbs.nl/ODataApi/OData/84799NED/$metadata#Cbs.OData.WebAPI.UntypedDataSet'
async function getAge() {
    const response = await fetch(url);
    const data = await response.json();
    const { k_0Tot15Jaar_8, k_15Tot25Jaar_9, k_25Tot45Jaar_10, k_45Tot65Jaar_11, k_65JaarOfOuder_12 } = data;
    console.log(k_0Tot15Jaar_8);
    console.log(k_15Tot25Jaar_9);
    console.log(k_25Tot45Jaar_10);
    console.log(k_45Tot65Jaar_11);
    console.log(k_65JaarOfOuder_12);
}


console.log("hello");

fetch('https://opendata.cbs.nl/ODataApi/OData/84799NED/$metadata#Cbs.OData.WebAPI.UntypedDataSet')
.then(res => {
    if (res.ok) {
        console.log("succes")
    } else {
        console.log("not succesful")
    }
})
.then(data => console.log(data))
 



// fetch('https://opendata.cbs.nl/ODataApi/OData/84799NED/$metadata#Cbs.OData.WebAPI.UntypedDataSet')
// .then(res => res.json()) 
// .then(data => console.log(data))