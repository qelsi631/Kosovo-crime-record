document.getElementById("crime-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let month = document.getElementById("month").value; // Example: '2024-09'

    // Filter crime data based on selected month
    let filteredCrimes = crimeRecords.filter(crime => crime.date.startsWith(month));

    let resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML = "";

    // Display results
    if (filteredCrimes.length > 0) {
        filteredCrimes.forEach(crime => {
            resultsDiv.innerHTML += `<p>${crime.date} - ${crime.type} ne ${crime.location}: ${crime.description}</p>`;
        });
    } else {
        resultsDiv.innerHTML = "<p>Ska ndonje krim te regjistruar.</p>";
    }
});
