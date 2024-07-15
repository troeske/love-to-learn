/* Global variables */
var myExerciseBook = []; // global array of objects to store the vocabularies to be learned

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

/**
 * Function to handle file selection and ReadAsText
 * @param {event}  
 * @returns: sets global variable myExerciseBook with array of objects with these properties:
 * l1, l2, languages, exercise-book, topic, author  
 */
function handleFileSelect(event) {
    //basic structure provided by Copilot
    let file = event.target.files[0];
    
    if (!file) {
        return;
    }

    let reader = new FileReader();
    reader.onload = function(e) {
        let text = e.target.result;
        myExerciseBook = csvToArray(text);

        // let's show the first word in the list on the learning card on the page
        let i = 0; // index of the first word in the list
        document.getElementById('original').textContent = myExerciseBook[0].l1;
        document.getElementById('translation').textContent = myExerciseBook[0].l2; 
        document.getElementById('languages').textContent = myExerciseBook[0].languages; 
        document.getElementById('exercise-book').textContent = myExerciseBook[0].myBook; 
        document.getElementById('topic').textContent = myExerciseBook[0].topic;
        document.getElementById('author').textContent = myExerciseBook[0].author;
        
        /* let's store the array row in the card header as location. Adding 1 to make it human readable */
        document.getElementById('current-card').textContent = i + 1;
        document.getElementById('total-cards').textContent = myExerciseBook.length;
    };
    reader.readAsText(file);
}


// Event listeners

/**
 * EventListner for the CSV file upload button
 */
document.getElementById('csvFileUpload-btn').addEventListener('click', function() {
    document.getElementById('csvFileInput').click();
});

document.getElementById('csvFileInput').addEventListener('change', handleFileSelect);

/**
 * EventListner to draw the line under the l1 word dynamically based on the length of the word 
 */ 
document.addEventListener("DOMContentLoaded", function() {
  let wordL1 = document.querySelector('.word-l1'); 
  let divider = document.querySelector('.hand-drawn-divider'); 

  if (wordL1 && divider) {
    let width = wordL1.offsetWidth; 
    divider.style.width = width + 'px'; // Set the width of the .hand-drawn-divider to match
  }
});

/**
* EventListner for the flip card functionality
*/
document.addEventListener('DOMContentLoaded', function() {
  /* Flip card functionality provided by Copilot */
  
  // Select both flip buttons
  var flipButtonFront = document.querySelector('#flip-card');
  var flipButtonBack = document.querySelector('#flip-card-back');
  // Select the card container
  var card = document.querySelector('.card');

  // Add click event listener to the flip button on the front side
  flipButtonFront.addEventListener('click', function() {
    card.classList.add('is-flipped');
  });

  // Add click event listener to the flip button on the back side
  flipButtonBack.addEventListener('click', function() {
    card.classList.remove('is-flipped');
  });
});
