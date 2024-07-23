/* Global variables */
var myExerciseBook = []; // global array of objects to store the vocabularies to be learned

/**
 * Function to greet the user, called when page is loaded. Basic structure provided by Copilot 
 * @returns: prompts the user for their name and updates the greeting on the page
 */
function greetUser() {
  // Get the user name modal dialog
  let modal = document.getElementById('nameModal');

  // display the dialog  
  modal.style.display = "block";

  document.getElementById('userNameInput').focus();
  document.getElementById("userNameInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      var userName = document.getElementById('userNameInput').value;
      if (userName.trim() !== "") {
        document.getElementById("userName").textContent = userName;
        modal.style.display = "none";
      } else {
        document.getElementById("userName").textContent = "Mr./Mrs. Incognito";
      }
    }
  })

  // When the user clicks on the cancel button, close the modal
  document.getElementById('cancelName').addEventListener('click', function () {
    modal.style.display = "none";
    document.getElementById("userName").textContent = "Mr./Mrs. Incognito";
  });

  // When the user clicks the submit button, let's capture the input and close the dialog
  document.getElementById('submitName').addEventListener('click', function () {
    var userName = document.getElementById('userNameInput').value;
    if (userName.trim() !== "") {
      document.getElementById("userName").textContent = userName;
      modal.style.display = "none";
    } else {
      document.getElementById("userName").textContent = "Mr./Mrs. Incognito";
    }
  });

  // Optional: close the modal if the user clicks outside of it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
      document.getElementById("userName").textContent = "Mr./Mrs. Incognito";
    }
  }
}

/**
 * Function to enable editing of the content of the h2 headings
 * @param {id} of the h2 element to edit
 * @returns: replaces the h2 element with an input field to edit the content
 * @returns: updates the h2 element with the new content when the user clicks away from the input field
 * based on suggestion from Copilot
 */
function editH2Content(id) {
  let h2Element = document.getElementById(id);
  let currentText = h2Element.childNodes[0].nodeValue.trim();
  let inputField = document.getElementById('input-' + id);

  inputField.style.display = 'block';
  inputField.value = currentText;
  inputField.focus();

  h2Element.style.visibility = 'hidden';

  // Function to revert back to h2 text
  function revertToText() {
    h2Element.childNodes[0].nodeValue = inputField.value + ' ';
    h2Element.style.visibility = 'visible';
    inputField.style.display = 'none';

    /* let's check if the user has edited any data and update array if needed */
    checkToUpdateData();
    
    // Remove event listeners to avoid memory leaks
    document.removeEventListener('click', outsideClickListener);
    document.removeEventListener('keyup', escKeyListener);
  }

  // Function to revert to original h2 text
  function revertToOriginalText() {
    h2Element.childNodes[0].nodeValue = currentText + ' ';
    h2Element.style.visibility = 'visible';
    inputField.style.display = 'none';
    // Remove event listeners to avoid memory leaks
    document.removeEventListener('click', outsideClickListener);
    document.removeEventListener('keyup', escKeyListener);
  }

  // Event listener for keypress event of current input field
  inputField.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      revertToText();
    }
  });

  // Event listener for clicks outside the input field
  function outsideClickListener(event) {
    if (!inputField.contains(event.target) && !h2Element.contains(event.target)) {
      revertToText();
    }
  }

  // Event listener for Esc key 
  function escKeyListener(event) {
    if (event.key === 'Escape') {
      revertToOriginalText();
    }
  }

  // Add event listeners
  document.addEventListener('click', outsideClickListener);
  document.addEventListener('keyup', escKeyListener);
}

/**
 * Function to handle CSV to array conversion
 * @param {csvText} from FileReader 
 * @returns array of objects with headers as keys
 */
function csvToArray(csvText) {
  //basic structure provided by Copilot
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

function deleteCurrentCard() {
  let appModus = document.getElementById('card').getAttribute('data-modus');
  if (appModus === "add") {
    alert("You are in add card modus. Please finish adding the card or cancel the action.");
    document.getElementById('flip-card').click(); //flip to the back sideto let the user finish add card
    return;
  }
  
  let i = parseInt(document.getElementById('current-card-front').textContent);
  if (confirm("Do you really want to delete card: " + i + "?")) {
    let cardToDelete = i - 1;
    let myDeletedCard = myExerciseBook.splice(cardToDelete, 1);

    let totalCards = myExerciseBook.length;
    if (totalCards === 0) {
      alert("No more cards in your exercise book");
    } else {
      showCardContent(0); //let's show the first card in the list
    }
  }
}

/**
 * Function to handle the next card button
 * @returns: updates the card with the next word in the list
 * @returns: updates the card header with the current card number
 */
function nextCard() {  
  let i = parseInt(document.getElementById('current-card-front').textContent) - 1; // array index of the current card (-1 of displayed card number)
  let totalCards = parseInt(document.getElementById('total-cards-front').textContent);
  if (i <= totalCards && i >= 0) {
    /* let's check if the user has edited any data and update array if needed */
    checkToUpdateData();

    /* let's clean-up the input area for the next card */
    visualizeResultClean();

    // and show the next card content
    i++;
    showCardContent(i);
  } else {
    alert("No more cards in your exercise book");
  }
}

/**
 * Function to handle the previous card button
 * @returns: updates the card with the previous word in the list
 * @returns: updates the card header with the current card number
 */
function prevCard() {
  let i = parseInt(document.getElementById('current-card-front').textContent) - 1;
  if (i >= 0) {
    /* let's check if the user has edited any data and update array if needed */
    checkToUpdateData();

    /* let's clean-up the input area for the next card */
    visualizeResultClean();

    // let's show the previous card content
    i--
    showCardContent(i);
  } else {
    alert("No more cards in your exercise book");
  }
}

/**
 * Function to draw the line under the original word dynamically based on the length of the word
 * funciton provided by Copilot
 */
function drawDividerFront() {
  let wordL1 = document.querySelector('#original');
  let dividerL1 = document.querySelector('#divider-front');

  if (wordL1 && dividerL1) {
    let width = wordL1.offsetWidth;
    dividerL1.style.width = width + 'px'; // Set the width of the .hand-drawn-divider for original to match
  }
};

/**
 * Function to draw the line under the translation dynamically based on the length of the word
 * funciton provided by Copilot
 */
function drawDividerBack() {
  let wordL2 = document.querySelector('#translation');
  let dividerL2 = document.querySelector('#divider-back');

  if (wordL2 && dividerL2) {
    let width = wordL2.offsetWidth;
    dividerL2.style.width = width + 'px'; // Set the width of the .hand-drawn-divider for transaltion to match
  }
};

/**
 * Function to check the translation
 * @returns: updates the correct and incorrect counter
 */
function checkTranslation() {
  let i = parseInt(document.getElementById('current-card-back').textContent) - 1;
  let translation = document.getElementById('translation').value;
  let correctTranslation = myExerciseBook[i].l2;
  let correct = parseInt(document.getElementById('correct').textContent);
  let incorrect = parseInt(document.getElementById('incorrect').textContent);

  if (translation.trim().toLowerCase() === correctTranslation.trim().toLowerCase()) {
    document.getElementById('correct').textContent = correct + 1;
    visualizeResult(true);
  } else {
    document.getElementById('incorrect').textContent = incorrect + 1;
    visualizeResult(false);
  }
}

/**
 * Function to show the correct translation
 */
function showTranslation() {
  let i = parseInt(document.getElementById('current-card-back').textContent) - 1;
  let correctTranslation = myExerciseBook[i].l2;
  document.getElementById('translation').value = correctTranslation;
}

/**
 * Function to visualize the result of the translation
 * @param {true/false} correctResult 
 * @returns: updates the background color of the card and the translation input field
 */
function visualizeResult(correctResult) {
  let cardBack = document.getElementsByClassName('card-back')[0];
  if (correctResult) {
    cardBack.style.backgroundColor = "#49fb35";
    document.getElementById('is-correct').style.backgroundColor = "#49fb35";
    document.getElementById('is-incorrect').style.backgroundColor = "#49fb35";
    document.getElementById('show-me').style.backgroundColor = "#49fb35";
    document.getElementById('enter-btn').style.backgroundColor = "#49fb35";
    document.getElementById('translation').style.backgroundColor = "#49fb35";
  } else {
    cardBack.style.backgroundColor = "#e20000";
    document.getElementById('is-correct').style.backgroundColor = "	#e20000";
    document.getElementById('is-incorrect').style.backgroundColor = "	#e20000";
    document.getElementById('show-me').style.backgroundColor = "	#e20000";
    document.getElementById('enter-btn').style.backgroundColor = "	#e20000";
    document.getElementById('translation').style.backgroundColor = "	#e20000";
  }
}

/**
 * Function to clean the result visualization
 * @returns: resets the background color of the card and the translation input field
 */
function visualizeResultClean() {
  let cardBack = document.getElementsByClassName('card-back')[0];
  cardBack.style.backgroundColor = "white";
  document.getElementById('is-correct').style.backgroundColor = "white";
  document.getElementById('is-incorrect').style.backgroundColor = "white";
  document.getElementById('show-me').style.backgroundColor = "white";
  document.getElementById('enter-btn').style.backgroundColor = "white";
  document.getElementById('translation').style.color = "black";
  document.getElementById('translation').value = "";
  document.getElementById('translation').style.backgroundColor = "white";
}

/**
 * Function to add a new card to the exercise book
 * @returns: adds the new card to the array of objects
 */
function addCard() {
  let myNewCard = [];
  myNewCard = {
    'l1': document.getElementById('input-original').value.trim(),
    'l2': document.getElementById('translation').value.trim(),
    'languages': document.getElementById('languages').textContent.trim(),
    'myBook': document.getElementById('exercise-book').textContent.trim(),
    'topic': document.getElementById('topic').textContent.trim(),
    'author': document.getElementById('userName').textContent.trim()
  };

  myExerciseBook.push(myNewCard);

  let i = myExerciseBook.length - 1;

  // let's clean the input area and show the last card just added and get back to learning mode
  prepareLearnCard(i);
  // let's show the card content of what we just added
  /*   showCardContent(i); */
  document.getElementById('flip-card-back').click(); //flip to the front side
}

function prepareAddCard() {
  // find out if the user already has loaded an exercise book
  document.getElementById('card').setAttribute('data-modus', 'add');

  // show input area for new card
  document.getElementById('original').style.display = 'none';
  document.getElementById('input-original').style.display = 'block';
  document.getElementById('input-original').placeholder = "Enter language 1";
  document.getElementById('input-original').focus();
  document.getElementById('show-me').style.display = "none";
}

function prepareLearnCard(i) {
  let totalCards = myExerciseBook.length;

  if (i < 0 || i > totalCards) {
    alert("something is wrong with the card index please refresh the page");
  } else {
    // set the modus to learn card
    document.getElementById('card').setAttribute('data-modus', 'learn');

    // show input area for new card
    document.getElementById('original').style.display = 'block';
    document.getElementById('input-original').value = "";
    document.getElementById('input-original').style.display = 'none';
    document.getElementById('show-me').style.display = "block";

    // let's show the requested word in the list
    showCardContent(i);
  }
}

/**
 * Function to show the card content
 * @param {*} i; index of the array element to show 
 * @returns: updates the card with the word in the list at index i 
 */
function showCardContent(i) {
  let totalCards = myExerciseBook.length;

  if (i < 0 || i >= totalCards) {
    alert("No more cards in your exercise book");
    return;
  } else {
    document.getElementById('languages').childNodes[0].nodeValue = myExerciseBook[i].languages + ' ';
    document.getElementById('exercise-book').childNodes[0].nodeValue = myExerciseBook[i].myBook + ' ';
    document.getElementById('topic').childNodes[0].nodeValue = myExerciseBook[i].topic + ' ';
    document.getElementById('original').textContent = myExerciseBook[i].l1;
    document.getElementById('translation').textContent = myExerciseBook[i].l2;
    document.getElementById('userName').textContent = myExerciseBook[i].author;
    drawDividerFront();
    document.getElementById('current-card-front').textContent = i + 1;
    document.getElementById('current-card-back').textContent = i + 1;
    document.getElementById('total-cards-front').textContent = totalCards;
    document.getElementById('total-cards-back').textContent = totalCards;
  }
}

/**
 * Function to check if the data has been updated and update the array if needed
 * @returns true if the data has been updated, false if not
 */
function checkToUpdateData() {
  let i = parseInt(document.getElementById('current-card-front').textContent) - 1;
  let languages = document.getElementById('languages').textContent.trim();
  let exerciseBook = document.getElementById('exercise-book').textContent.trim();
  let topic = document.getElementById('topic').textContent.trim();

  if (languages !== myExerciseBook[i].languages || exerciseBook !== myExerciseBook[i].myBook || topic !== myExerciseBook[i].topic) {
    myExerciseBook[i].l1 = document.getElementById('input-original').value.trim();
    myExerciseBook[i].l2 = document.getElementById('translation').value.trim();
    myExerciseBook[i].languages = document.getElementById('languages').textContent.trim();
    myExerciseBook[i].myBook = document.getElementById('exercise-book').textContent.trim();
    myExerciseBook[i].topic = document.getElementById('topic').textContent.trim();
    myExerciseBook[i].author = document.getElementById('userName').textContent.trim();
    return true;
  } else {
    return false;
  }
}

/**
 * Function to handle file selection and ReadAsText
 * @param {event}  
 * @returns: fills global variable myExerciseBook with array of objects with these properties:
 * l1, l2, languages, exercise-book, topic, author  
 * provided by Copilot 
 */
function handleFileSelect(event) {
  /* check if the user already has opened an exercise book or added words manually */
  if (myExerciseBook.length !== 0) {
    if (!confirm("Any changes you made to the current exercise book will be lost if you did not save your current exercise book. Do you want to continue?")) {
      return;
    }
  }
  
  //basic structure provided by Copilot
  let file = event.target.files[0];

  if (!file) {
    return;
  }

  let reader = new FileReader();
  reader.onload = function (e) {
    let text = e.target.result;
    myExerciseBook = csvToArray(text);

    // let's show the first word in the list on the learning card on the page
    let i = 0; // index of the first word in the list
    document.getElementById('original').textContent = myExerciseBook[i].l1;
    drawDividerFront();
    document.getElementById('languages').childNodes[0].nodeValue = myExerciseBook[i].languages + ' ';
    document.getElementById('exercise-book').childNodes[0].nodeValue = myExerciseBook[i].myBook + ' ';
    document.getElementById('topic').childNodes[0].nodeValue = myExerciseBook[i].topic + ' ';

    /* let's store the array row in the card header as location. Adding 1 to make it human readable */
    document.getElementById('current-card-front').textContent = i + 1;
    document.getElementById('total-cards-front').textContent = myExerciseBook.length;
    document.getElementById('current-card-back').textContent = i + 1;
    document.getElementById('total-cards-back').textContent = myExerciseBook.length;

    /* let's clean the right / wrong counter */
    document.getElementById('correct').textContent = "0"
    document.getElementById('incorrect').textContent = "0"
    // set the modus to learn card
    document.getElementById('card').setAttribute('data-modus', 'learn');
  };
  reader.readAsText(file);
}

/**
 * 
 * @returns the array of objects as a CSV file
 * draft of the function provided by Copilot with modifications by myself
 */
function convertArrayToCSV() {
  let totalCards = myExerciseBook.length;

  // Check if the array is not empty and has items
  if (totalCards === 0) {
    alert('Your Exercise Book is empty!');
    return;
  }

  // Define CSV headers based on the object keys
  let headers = ['l1', 'l2', 'languages', 'myBook', 'topic', 'author'];
  // Convert array of objects to CSV string
  let csvRows = myExerciseBook.map(obj => {
    return headers.map(fieldName => `${obj[fieldName]?.replace(/"/g, '""') || ''}`).join(',');
  });
  csvRows.unshift(headers.join(',')); // Add headers at the beginning
  const csvString = csvRows.join('\r\n');

  // Create a Blob with the CSV data
  const blob = new Blob([csvString], {
    type: 'text/csv;charset=utf-8;'
  });

  // let's use the last entry in the myBook field as the filename replacing spaces with underscores
  let myBookName = myExerciseBook[totalCards-1].myBook;
  let filename = replaceSpacesWithUnderscores(myBookName) + '.csv';
  
  // Create a temporary download link
  const tempLink = document.createElement('a');
  tempLink.href = URL.createObjectURL(blob);
  tempLink.setAttribute('download', filename);
  document.body.appendChild(tempLink);

  // Trigger the download by simulating a click on the link
  tempLink.click();

  // Clean up by removing the temporary link
  document.body.removeChild(tempLink);
}

/**
 * 
 * @param {*} str 
 * @returns the string with spaces replaced by underscores
 * function provided by Copilot
 */
function replaceSpacesWithUnderscores(str) {
  return str.replace(/ /g, '_');
}

// Event listeners

/**
 * EventListner for the CSV file upload button
 */
document.getElementById('csvFileUpload-btn').addEventListener('click', function () {
  document.getElementById('csvFileInput').click();
});

document.getElementById('csvFileInput').addEventListener('change', handleFileSelect);

/**
 * EventListner to draw the line under the l1 word dynamically based on the length of the word 
 */
document.getElementById('original').addEventListener('change', drawDividerFront);
document.getElementById('translation').addEventListener('change', drawDividerBack);

/* EventListner for enter and click on submit button for translation text  */
document.getElementById("translation").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    let appModus = document.getElementById('card').getAttribute('data-modus');
    /* let's check if we are in add card modus */
    if (appModus === "add") {
      addCard();

    } else if (appModus === "learn") {
      checkTranslation();

    } else {
      alert("function " + appModus + " not implemented yet");
    }

  } else {
    document.getElementById("translation").placeholder = ""
  }
});

/* eventListner for original inoput to flip to the back side */
document.getElementById("input-original").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    let appModus = document.getElementById('card').getAttribute('data-modus');
    /* let's check if we are in add card modus */
    if (appModus === "add") {
      document.getElementById('flip-card').click(); //flip to the back side
    } else {
      alert("function " + appModus + " not implemented yet");
    }

  }
});


/* EventListner for the trash button on the front of the card */
document.getElementById('trash-card').addEventListener('click', deleteCurrentCard);


/* EventListners for the card-back card-nav buttons*/
document.getElementById('enter-btn').addEventListener('click', function () {
  let appModus = document.getElementById('card').getAttribute('data-modus');

  if (appModus === "add") {
    addCard();
  } else {
    checkTranslation();
  }
});

/* eventListner for the show-me, correct and incorrect buttons on the back side of the card */
document.getElementById('show-me').addEventListener('click', showTranslation);
document.getElementById('is-correct').addEventListener('click', function () {
  let appModus = document.getElementById('card').getAttribute('data-modus');

  if (appModus === "add") {
    addCard();
  } else if (appModus === "learn") {
    let correct = parseInt(document.getElementById('correct').textContent);
    document.getElementById('correct').textContent = correct + 1;
    visualizeResult(true);
  } else {
    alert("function " + appModus + " not implemented yet");
  }
});

document.getElementById('is-incorrect').addEventListener('click', function () {
  let appModus = document.getElementById('card').getAttribute('data-modus');

  if (appModus === "add") {
    // user wants to cancel his add card so let's go back to learn mode with the current card
    let i = parseInt(document.getElementById('current-card-front').textContent) - 1;
    prepareLearnCard(i);
    document.getElementById('flip-card-back').click(); //flip to the front side
  } else if (appModus === "learn") {
    let incorrect = parseInt(document.getElementById('incorrect').textContent);
    document.getElementById('incorrect').textContent = incorrect + 1;
    visualizeResult(false);
  } else {
    alert("function " + appModus + " not implemented yet");
  }

});

/**
 * EventListner for the next button
 */
document.getElementById('next-btn-front').addEventListener('click', function () {
  let appModus = document.getElementById('card').getAttribute('data-modus');
  if (appModus === "add") {
    prepareLearnCard(0); // get back into learn mode and show the first card in the book
    return;
  } else {
    nextCard();
  }
})

document.getElementById('next-btn-back').addEventListener('click', function () {
  /* let's check if we are in add card modus */
  let appModus = document.getElementById('card').getAttribute('data-modus');
  if (appModus === "add") {
    alert("You are in add card mode. Please finish adding the new card or click cancel on the backside of the card");
    return;
  } else {
    nextCard();
    document.getElementById('flip-card-back').click(); //flip to the front side
  }
});

/**
 * EventListner for the previous button
 */
document.getElementById('prev-btn-back').addEventListener('click', function () {
 /* let's check if we are in add card modus */
 let appModus = document.getElementById('card').getAttribute('data-modus');
 if (appModus === "add") {
   alert("You are in add card mode. Please finish adding the new card or click cancel on the backside of the card");
   return;
 } else {
  prevCard();
  document.getElementById('flip-card-back').click(); //flip to the front side
 }
});

document.getElementById('prev-btn-front').addEventListener('click', function () {
  let appModus = document.getElementById('card').getAttribute('data-modus');
  if (appModus === "add") {
    prepareLearnCard(0); // get back into learn mode and show the first card in the book
    return;
  } else {
   prevCard();
  }
});

/**
 * set EventListner to add-card button
 * change the modus to add a new card by setting the data-modus attribute to "add"
 * and display the input area for the new card
 */
document.getElementById('add-card').addEventListener('click', prepareAddCard);

/**
 * EventListner for the flip card functionality
 */
document.addEventListener('DOMContentLoaded', function () {
  /* Flip card functionality provided by Copilot */

  // Select both flip buttons
  var flipButtonFront = document.querySelector('#flip-card');
  var flipButtonBack = document.querySelector('#flip-card-back');
  // Select the card container
  var card = document.querySelector('.card');

  // Add click event listener to the flip button on the front side
  flipButtonFront.addEventListener('click', function () {
    card.classList.add('is-flipped');

    // let's check what app modus we are in an reconfigure card UI accordingly
    let appModus = document.getElementById('card').getAttribute('data-modus');
    if (appModus === "add") {
      prepareAddCard(0);
    } else if (appModus === "learn") {
      let i = parseInt(document.getElementById('current-card-front').textContent) - 1;
      prepareLearnCard(i);
    } else {
      //alert("function " + appModus + " not implemented yet");
    }
    document.getElementById('translation').focus();
  });

  // Add click event listener to the flip button on the back side
  flipButtonBack.addEventListener('click', function () {
    card.classList.remove('is-flipped');
    /* let's clean-up the input area for the next card */
    visualizeResultClean();
    let i = parseInt(document.getElementById('current-card-back').textContent) - 1;
    showCardContent(i);
  });

  /* ask for the users name - we are a polite app after all */
  greetUser();

});

/**
 * function to show/hide help text for the buttons on the page when the info button is clicked
 * draft provided by Copilot needed a lot of adaptions though
 */
document.getElementById('info-btn').addEventListener('click', function () {
  let helpTexts = document.querySelectorAll('.help-text');
  helpTexts.forEach(text => {
    if (text.classList.contains('visible')) {
      text.classList.remove('visible');
    } else {
      text.classList.add('visible');
    }
  });
});