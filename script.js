// Step 1: check out what info we get from the api

const apiUrl = 'https://api.le-systeme-solaire.net/rest/bodies/';



async function planetInfo(planet) {
    const response = await fetch(apiUrl + planet);
    var data = await response.json();

    console.log(data);
}


planetInfo('jupiter');




