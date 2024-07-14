
/**
 * Function to handle CSV to Array conversion
 * @param {csvText} from FileReader 
 * @returns array of objects with headers as keys
 */
function csvToArray(csvText) {
   //basic structure provided by Github Copilot
    const csvNEWLINE = '\n';
    const csvDELIMITER = ',';
    
    let lines = csvText.split(csvNEWLINE);
    let headers = lines[0].split(csvDELIMITER).map(header => header.trim());

    return lines.slice(1).map(line => {
        let values = line.split(csvDELIMITER).map(value => value.trim());
        return headers.reduce((acc, header, index) => {
            acc[header] = values[index];
            return acc;
        }, {});
    });
}
/* draw the line under the l1 word dynamically based on the length of the word */
document.addEventListener("DOMContentLoaded", function() {
    var wordL1 = document.querySelector('.word-l1'); // Select the .word-l1 element
    var divider = document.querySelector('.hand-drawn-divider'); // Select the .hand-drawn-divider element
  
    if (wordL1 && divider) {
      var width = wordL1.offsetWidth; // Get the width of the .word-l1 element
      divider.style.width = width + 'px'; // Set the width of the .hand-drawn-divider to match
    }
  });

/**
 * Function to handle file selection and ReadAsText
 * @param {event}  
 * @returns 
 */
function handleFileSelect(event) {
    //basic structure provided by Github Copilot
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

// Event listeners
document.getElementById('csvFileUpload-btn').addEventListener('click', function() {
    document.getElementById('csvFileInput').click();
});

document.getElementById('csvFileInput').addEventListener('change', handleFileSelect);


