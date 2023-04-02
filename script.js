// Select all elements of interest
let newConfirmedStats = document.querySelector(".new-confirmed-stats");
let newRecoveredStats = document.querySelector(".new-recovered-stats");
let totalRecoveredStats = document.querySelector(".total-recovered-stats");
let totalDeathsStats = document.querySelector(".total-deaths-stats");
let newDeathsStats = document.querySelector(".new-deaths-stats");
let totalConfirmedStats = document.querySelector(".total-confirmed-stats");
let tableBody = document.querySelector("#tableBody");

// bind document to an add event listener
document.addEventListener("DOMContentLoaded", displayCovid19Stats);


// Declare an event handler function.
function displayCovid19Stats() {
    fetch("https://api.covid19api.com/summary")
      .then((response) => response.json())
      .then((data) => { 
        try {
           newConfirmedStats.innerHTML = data.Global.NewConfirmed.toLocaleString();
           newRecoveredStats.innerHTML = data.Global.NewRecovered.toLocaleString();
           totalRecoveredStats.innerHTML = data.Global.TotalRecovered.toLocaleString();
           totalDeathsStats.innerHTML = data.Global.TotalDeaths.toLocaleString();
           newDeathsStats.innerHTML = data.Global.NewDeaths.toLocaleString();
           totalConfirmedStats.innerHTML = data.Global.TotalConfirmed.toLocaleString();

           for (let i = 0; i < data.Countries.length; i++) { 
                let tr = document.createElement("tr");
                tr.innerHTML = `
                <td>${data.Countries[i].Country}</td>
                <td>${data.Countries[i].CountryCode}</td>
                <td>${data.Countries[i].Slug}</td>
                <td>${data.Countries[i].NewConfirmed.toLocaleString()}</td>
                <td>${data.Countries[i].TotalConfirmed.toLocaleString()}</td>
                <td>${data.Countries[i].NewDeaths.toLocaleString()}</td>
                <td>${data.Countries[i].TotalDeaths.toLocaleString()}</td>
                <td>${data.Countries[i].NewRecovered.toLocaleString()}</td>
                <td>${data.Countries[i].TotalRecovered.toLocaleString()}</td>
                <td>${data.Countries[i].Date}</td>`;
                tableBody.appendChild(tr);
           }          
        }       
        catch(err) {
            console.log(`Error: ${err}`);
        }                                                    
      }) 
}