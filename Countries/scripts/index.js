var selectedCountry;
var selectedContinent;

const init = function() {
    var button = document.getElementById("addCountry");
    let liContinents = document.getElementById("continents").children[1].children;
    let liCountries = document.getElementById("countries").children[1].children;
    for (var i = 0; i < liContinents.length; i++){
        liContinents[i].addEventListener("click", e => {
            selectedContinent = e.target;
            if(selectedContinent != undefined && selectedCountry != undefined){
                button.classList.remove("disabled");
            }
        })
    }

    for (var i = 0; i < liCountries.length; i++){
        liCountries[i].addEventListener("click", e => {
            selectedCountry = e.target;
            if(selectedContinent != undefined && selectedCountry != undefined){
                button.classList.remove("disabled");
            }
        })
    }

    button.addEventListener("click", e => {
        selectedContinent.getElementsByTagName("ul")[0].appendChild(selectedCountry);
        selectedCountry.removeEventListener("click", e);
    })
}

window.addEventListener("DOMContentLoaded", init);

