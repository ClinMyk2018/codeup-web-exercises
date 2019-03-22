
////
////
///


const map = document.getElementById('map');
const country = document.querySelectorAll('.land');
const toolTip = document.getElementById('tooltip');
const message = toolTip.innerHTML;

// grab the country name and display
function showCountryName() {
    toolTip.innerHTML = event.target.getAttribute('title');
}

// show the default text
function hideCountryName() {
    toolTip.innerHTML = message;
}

// set event listener on the map
map.addEventListener('mouseover', function(event){
    // if the mouse hovers over a country
    if (event.target.classList.contains('land')) {
        showCountryName();
    }
    else {
        hideCountryName();
    }
});