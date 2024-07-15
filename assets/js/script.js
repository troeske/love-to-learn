/* Global variables */
var myExerciseBook = []; // global array of objects to store the vocabularies to be learned

/**
 * Function to greet the user, called when page is loaded 
 * @returns: prompts the user for their name and updates the greeting on the page
 */ 
function greetUser() {
  // Get the user name modal dialog
  let modal = document.getElementById('nameModal');

  // display the dialog  
  modal.style.display = "block";

  document.getElementById('userNameInput').focus();

  // When the user clicks on the cancel button, close the modal
  document.getElementById('cancelName').addEventListener('click', function() {
    modal.style.display = "none";
    document.getElementById("userName").textContent = "Mr./Mrs. Incognito";
  });

  // When the user clicks the submit button, let's capture the input and close the dialog
  document.getElementById('submitName').addEventListener('click', function() {
    var userName = document.getElementById('userNameInput').value;
    if (userName.trim() !== "") {
      document.getElementById("userName").textContent = userName;
      modal.style.display = "none";
    } else {
      document.getElementById("userName").textContent = "Mr./Mrs. Incognito";
    }
  });

  // Optional: close the modal if the user clicks outside of it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      document.getElementById("userName").textContent = "Mr./Mrs. Incognito";
    }
  }
}

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
 * Function to handle the next card button
 * @returns: updates the card with the next word in the list
 * @returns: updates the card header with the current card number
 */
function nextCard() {
  let i = parseInt(document.getElementById('current-card-front').textContent) - 1;
  let totalCards = parseInt(document.getElementById('total-cards-front').textContent);
  if (i < totalCards - 1) {
    i++;
    document.getElementById('original').textContent = myExerciseBook[i].l1;
    drawDividerFront();
    document.getElementById('translation').textContent = myExerciseBook[i].l2; 
    drawDividerBack();
    document.getElementById('languages').textContent = myExerciseBook[i].languages; 
    document.getElementById('exercise-book').textContent = myExerciseBook[i].myBook; 
    document.getElementById('topic').textContent = myExerciseBook[i].topic;
    document.getElementById('current-card-front').textContent = i + 1;
    document.getElementById('current-card-back').textContent = i + 1;
    document.getElementById('correct').textContent = ""
    document.getElementById('incorrect').textContent = ""
  }
}

/**
 * Function to handle the previous card button
 * @returns: updates the card with the previous word in the list
 * @returns: updates the card header with the current card number
 */
function prevCard() {
  let i = parseInt(document.getElementById('current-card-front').textContent) - 1;
  let totalCards = parseInt(document.getElementById('total-cards-front').textContent);
  if (i > 0) {
    i--;
    document.getElementById('original').textContent = myExerciseBook[i].l1;
    drawDividerFront();
    document.getElementById('translation').textContent = myExerciseBook[i].l2; 
    drawDividerBack();
    document.getElementById('languages').textContent = myExerciseBook[i].languages; 
    document.getElementById('exercise-book').textContent = myExerciseBook[i].myBook; 
    document.getElementById('topic').textContent = myExerciseBook[i].topic;
    document.getElementById('current-card-front').textContent = i + 1;
    document.getElementById('current-card-back').textContent = i + 1;
    document.getElementById('correct').textContent = ""
    document.getElementById('incorrect').textContent = ""
  }
}

function drawDividerFront() {
  let wordL1 = document.querySelector('#original'); 
  let dividerL1 = document.querySelector('#divider-front'); 

  if (wordL1 && dividerL1) {
    let width = wordL1.offsetWidth; 
    dividerL1.style.width = width + 'px'; // Set the width of the .hand-drawn-divider for original to match
  }
};

function drawDividerBack() {
  let wordL2 = document.querySelector('#translation'); 
  let dividerL2 = document.querySelector('#divider-back'); 

  if (wordL2 && dividerL2) {
    let width = wordL2.offsetWidth; 
    dividerL2.style.width = width + 'px'; // Set the width of the .hand-drawn-divider for transaltion to match
  }
};

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
        drawDividerFront();
        document.getElementById('translation').textContent = myExerciseBook[0].l2; 
        drawDividerBack();
        document.getElementById('languages').textContent = myExerciseBook[0].languages; 
        document.getElementById('exercise-book').textContent = myExerciseBook[0].myBook; 
        document.getElementById('topic').textContent = myExerciseBook[0].topic;
        
        /* let's store the array row in the card header as location. Adding 1 to make it human readable */
        document.getElementById('current-card-front').textContent = i + 1;
        document.getElementById('total-cards-front').textContent = myExerciseBook.length;
        document.getElementById('current-card-back').textContent = i + 1;
        document.getElementById('total-cards-back').textContent = myExerciseBook.length;

        /* let's clean the right / wrong counter */
        document.getElementById('correct').textContent = ""
        document.getElementById('incorrect').textContent = ""
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
document.getElementById('original').addEventListener('change', drawDividerFront);
document.getElementById('original').addEventListener('change', drawDividerBack);

/**
 * EventListner for the next button
 */
document.getElementById('next-btn-front').addEventListener('click', nextCard);
document.getElementById('next-btn-back').addEventListener('click', nextCard);

/**
 * EventListner for the previous button
 */
document.getElementById('prev-btn-back').addEventListener('click', prevCard);
document.getElementById('prev-btn-front').addEventListener('click', prevCard);

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

  /* ask for the users name - we are a polite app after all */
  greetUser();

});
