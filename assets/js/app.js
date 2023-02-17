let myInnerText = document.getElementById('innertext');

let myInnerHtml = document.getElementById('innerhtml');



//inner text

let myTekst = '<article><h2> min artikel</h2><img src="https://heleverdeniskole.dk/sites/default/files/styles/main_pictures_as_primary_image/public/media/uganda_-_photo/elephant_uganda_brian_harries_jpeg680x454.jpg?itok=4NB50A1a"alt = "" ><p>fin elefant er meget stor</p></article >';



myInnerText.innerText = myTekst;

myInnerHtml.innerHTML = myTekst;


