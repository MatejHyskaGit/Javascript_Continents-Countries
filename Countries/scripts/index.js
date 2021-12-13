var selectedCountry;
var selectedContinent;

const init = function() {
    var button = document.getElementById("addCountry");
    let liContinents = document.getElementById("continents").children[1].children;
    let liCountries = document.getElementById("countries").children[1].children;
    for (var i = 0; i < liContinents.length; i++){
        liContinents[i].addEventListener("click", e => {
            selectedContinent = e.target;
            ContinentsSelected = document.getElementsByClassName("active_cont");
            for (let index = 0; index < ContinentsSelected.length; index++) {
                ContinentsSelected[index].classList.remove("active_cont");
            }
            selectedContinent.classList.toggle("active_cont");
            if(selectedContinent != undefined && selectedCountry != undefined){
                button.classList.remove("disabled");
            }
        })
    }

    for (var i = 0; i < liCountries.length; i++){
        liCountries[i].addEventListener("click", e => {
            selectedCountry = e.target;
            CountriesSelected = document.getElementsByClassName("active_country");
            for (let index = 0; index < CountriesSelected.length; index++) {
                CountriesSelected[index].classList.remove("active_country");
            }
            selectedCountry.classList.toggle("active_country");
            if(selectedContinent != undefined && selectedCountry != undefined){
                button.classList.remove("disabled");
            }
        })
    }

    button.addEventListener("click", e => {
        selectedContinent.getElementsByTagName("ul")[0].appendChild(selectedCountry);
        selectedCountry.classList.remove("active_country");
        selectedContinent.classList.remove("active_cont");
        console.log(selectedContinent);
        button.classList.add("disabled");
        let output = document.getElementById("output").children[0];
        console.log(output);
        output.innerHTML = selectedCountry.innerText + " Se přidal pod " + selectedContinent.children.innerText;
    })
}

window.addEventListener("DOMContentLoaded", init);

