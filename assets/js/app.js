let myInnerText = document.getElementById('innertext');
let myInnerHtml = document.getElementById('innerhtml');

// teksten der bruges i begge eksempler her under:
let myTekst = '<article><h3> min artikel</h3><img src="https://heleverdeniskole.dk/sites/default/files/styles/main_pictures_as_primary_image/public/media/uganda_-_photo/elephant_uganda_brian_harries_jpeg680x454.jpg?itok=4NB50A1a"alt = "" ><p>fin elefant er meget stor</p></article >';


// innerText viser hele teksten inklusiv html tags i DOM
myInnerText.innerText = myTekst;


// innerHTML viser teksten men tilføjer de HTML tags der er i teksten i DOM.
myInnerHtml.innerHTML = myTekst;

