// Function to convert CSV text into an array of objects basic structure provided by Github Copilot
function csvToArray(csvText) {
    const csvNEWLINE = '\n';
    const csvDELIMITER = ',';
    
    let lines = csvText.split(csvNEWLINE);
    let headers = lines[0].split(csvDELIMITER);

    return lines.slice(1).map(line => {
        const values = line.split(csvDELIMITER);
        return headers.reduce((acc, header, index) => {
            acc[header] = values[index];
            return acc;
        }, {});
    });
}

// Function to handle file selection
function handleFileSelect(event) {
    let file = event.target.files[0];
    
    if (!file) {
        return;
    }

    let reader = new FileReader();
    reader.onload = function(e) {
        let text = e.target.result;
        let data = csvToArray(text);

        console.log(data); // For demonstration, log the array to the console
        // You can process the data array further here
    };
    reader.readAsText(file);
}

document.getElementById('csvFileInput').addEventListener('change', handleFileSelect);