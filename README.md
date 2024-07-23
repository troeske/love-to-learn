# LOVE-TO-EARN
This is the website for a vocabulary learning: LOVE-To-LEARN (L2L): [LOVE-TO-LEARN](https://troeske.github.io/love-to-learn/). 

I was inspired to implement this site after helping one of my daughters to learn english vocabulary focussed on certain topics (in her case crime & punishment and UK disparities) for her highschool exam a 3 weeks ago. Though she has successfully passed her exam already before I started the web app, it served as my inspiration and decisions on MVP functionality. With this past but real use case in mind I probably got carried away with MVP functionality and it turned into an NVP: Nice Viable Product. 

## User Experience

### Target Audience:
    anybody who is looking for a simple vocabulary learning app that allows manual entering and saving of vocabulary cards as well as opening existing exercise books. 

### User Stories:
    (1) as a user I want to load my existing vocabulary exercise book (as .csv file) into L2L. 
    (2) as a user I want to be able to type in the answer for a word and get feedback if I spelled the word correctly.
    (3) as a user I want to have to the option not to type in the word but have it displayed when pressing a button after picturing the correctr answer in ones mind.
    (4) as a user I want to see how many words I got right and how many I did not.
    (5) as a user I want to see where I am in the exercise book and how many words are left.
    (6) as a user I want to be able to add my own word pairs to my current exercise book.
    (7) as a user I want to be ablt to save my additions and the current exercise book. 
    (8) as a user I want create my own exercise book and save it.
    
### Future Use-Cases
    (9) help with pronoucing the words correctly
    (10) saving learning progress beyond the current session
    (11) voice to text entering
    (12) more complex learning cards for flexibel content (pictures, lists etc.) to facilitate learning any kind of content 

## Design
### Site Structure
The site implements a simple structure with one landing page 

### Wireframes
__Mobile First approach:__

<img src="media/L2L_landing_page_I.png"  width="300" height="auto" alt="Landing Page Card Front - index.html">
<img src="media/L2L_landing_page_II.png"  width="300" height="auto" alt="Landing Page Card Front - index.html">


__Tablet and Desktop:__

Web site react responsive by slightly adjusting the layout where necessary.


### Imagery used
Simple iconography for intuitive and clean UI.

### Colour Scheme
Black and white with highlight colors - neon green and red - signifiying right and wrong answers.
        
### Typography
All text is based on the sans-serif free Google font: Roboto.

## Current Features:

### Landing Page
The landing page is the core of the Love-To-Learn Site. It shows everything the user needs to get started with the learning experience.
<br>
<img src="media/L2L_landing_page_book_loaded.png"  width="300" height="auto" alt="Love-To-Learn Landing Page">



- __Usernname__
To make the experience personal L2L asks the users for their Name or Alias. 
<br>
<br>
<img src="media/L2L_username_scrn.png"  width="300" height="auto" alt="Username entry">

If the user decides not to fill in any data, L2L selects a default:
<br>
<img src="media/L2L_username_Incognito.png"  width="300" height="auto" alt="Hello Mr./Ms. Incognito">

- __Exercise Book Details__
This area shows the Name of the Exercise Book, the current topic within the Exercise Book and the languages to be learned.
<br>
<img src="media/L2L_book_topic_section.png"  width="300" height="auto" alt="Exercise Book Details">

### Word Card
- __Results Area__
The results of the current learning session is presented below the Word Card:
<br>
<img src="media/L2L_results_area.png"  width="300" height="auto" alt="Results Area">

### Navigation Bar
The Navigation Bar provides buttons to manage Exercise Books and acces to the Help/Info function.
<br>
<img src="media/L2L_nav_bar.png"  width="300" height="auto" alt="Navigation Bar">

- __Info Button__
The Info Button displays infos on each of the buttons of the L2L Site. <img src="media/L2L_Info-Button.png"  width="30" height="auto" alt="Info Button"> One click on the Info Button will show the Info/Help text for each of the main site elements. When pressed again the info will disapear again. 

<br>
<img src="media/L2L_info_button_card_front.png"  width="300" height="auto" alt="Site Info - Card Front">
<img src="media/L2L_info_button_card_back.png"  width="300" height="auto" alt="media/L2L_info_button_card_back.png">

- __Save Exercise Book__
<br>
<img src="media/L2L_Save-Button.png"  width="30" height="auto" alt="Load Exercise Book">
<br>
At any time the user can save the current Exercise Book. The browser treats this as a file download and on mobile it is typically saved to the DOWNLOADS directory by default.
(on mobiles it typically is saved to the DOWNLOADS directory by default)
<br>
<img src="media/L2L_save_Book.png"  width="300" height="auto" alt="Load Exercise Book">


- __Download Template__
<br>
<img src="media/L2L_Template-Button.png"  width="30" height="auto" alt="Download Template">
<br>

To make it easy to build your own Exercise Book, L2L provides a template download function. Save the file at a destination of your choice (on mobiles it typically is saved to the DOWNLOADS directory by default). The user can open the file in a text editor or spreadsheet program to manually enter word pairs.
The Load Exercise Book function allows the loading of the downloaded template into L2L and the user can use the L2L __Add Card__ function to add words as desired.

- __Load Exercise Book__
<br>
<img src="media/L2L_Load-Book-Button.png"  width="30" height="auto" alt="Load Exercise Book">

Users can load their existing (or previsously saved) Exercise Books intto L2L to start learning right away.

### Learning Mode
Core of L2L is to help user learn vocabulary. After loading an existing Exercise Book or maually entering a desired vocabulary the users can get start to learn and test their knowledge and progress.

- __Navigating the Exercise Book__
<br>
<img src="media/L2L_Card_Front_non-empty.png"  width="300" height="auto" alt="Card Front">
<br>

The top of the front of the Word Card has buttons to step forward (Next Button) or backward (Previous Button) in the current Exercise Book and shows the current position in the Exercise Book. The Front also shows the original word to be learned.

- __Learning and Testing your Knowledge__
To learn the card, the user clicks on the flip card button and can press on the magnifying glass to display the translation of the original word.
<br>
<img src="media/L2L_backside_enter_translation_empty.png"  width="300" height="auto" alt="Card Back">
<br>

- __Verifying your Result - correct__
Once the user has mastered the word, they can either type in the translation in to the input field and press ENTER (or the Enter button). If the translation was correct, the card will turn green and the 'got it' counter increases. 

<img src="media/L2L_translation_correct.png"  width="300" height="auto" alt="Correct Translation">

- __Verifying your Result - incorrect__
If the translation was wrong the card turns red and the 'to improve' counter increases.

<img src="media/L2L_translation_wrong.png"  width="300" height="auto" alt="Wrong Translation">


The user can also keep the translation in mind and just click on the magnisfying glass to see if they were right. If they were correct, they can press the correct button below the input field. The card will turn green and the 'got it' counter increases. If they were wrong they can press the x-button  below the input field and the card turns red and the 'to improve' counter increases.

The user can also flip back to the front and look at the orignal word again.

### Add a Word Card
<br>
<img src="media/L2L_add_card_front.png"  width="300" height="auto" alt="Add Card Front">
<br>

The user can manually add words to the current Exercise Book or start a new Exercise Book from scratch. To add words, the users clicks on the + Button on the front of the word card. When hitting Enter or clicking on flip-card, the card will turn to the backside and the user can enter the translation. L2L will save the card once the user hits Enter, clicks the Enter-Button or the Correct-Button below the input field for the translated word. Automatically the card will flip to the front to get back into learning mode.

### Delete current Word Card
The user can delete a card in the current Exercise Book by clicking on the trash button below the original word on the fron of the card. A confirm/Cancel message will pop up and the card will be deleted.
<br>
<img src="media/L2L_delete_card_message.png"  width="300" height="auto" alt="Delete Card">
<br>


## Manual Testing

__Various Browsers on mobile and desktop devices:__

| Nr | Feature                   | Action                                                                                                                             | Expected Behaviour                                                                                                                                                                                       | android- chrome | android- firefox | android- edge | iOS - Safari | iOS-Chrome | desktop- Safari | desktop- chrome | desktop- firefox |
| -- | ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | ---------------- | ------------- | ------------ | ---------- | --------------- | --------------- | ---------------- |
| 1  | user name                 | enter your name and press [enter]                                                                                                  | modal dialog closes and user name shows the entered name                                                                                                                                                 | ok              | ok               | ok            | ok           | ok         | ok              | ok              | ok               |
| 2  | user name                 | user enters name and clicks on the enter-button                                                                                    | modal dialog closes and user name shows the entered name                                                                                                                                                 | ok              | ok               | ok            | ok           | ok         | ok              | ok              | ok               |
| 4  | user name                 | user enters name and clicks on cancel-button                                                                                       | modal dialog closes and user name shows default                                                                                                                                                          | ok              | ok               | ok            | ok           | ok         | ok              | ok              | ok               |
| 5  | user name                 | user enters name and clicks anywhere else on the screen                                                                            | modal dialog closes and user name shows default                                                                                                                                                          | ok              | ok               | ok            | ok           | ok         | ok              | ok              | ok               |
| 6  | info button               | user clicks info button                                                                                                            | info on all buttons of the page show                                                                                                                                                                     | ok              | ok               | ok            | ok           | ok         | ok              | ok              | ok               |
| 7  | info button               | info button -> user clicks flip card                                                                                               | card flips and info on all buttons of the page show                                                                                                                                                      | ok              | ok               | ok            | ok           | ok         | ok              | ok              | ok               |
| 8  | info button               | info button -> user clicks info button again                                                                                       | info on all buttons is hidden again                                                                                                                                                                      | ok              | ok               | ok            | ok           | ok         | ok              | ok              | ok               |
| 9  | safe button               | user clicks safe button (empty book)                                                                                               | message is displayed that the exercise book is empty                                                                                                                                                     | ok              | ok               | ok            | ok           | ok         | ok              | ok              | ok               |
| 10 | safe button               | user clicks safe button (non-empty book)                                                                                           | user can download the current exercise book with all changes to a location of choice. On mobile: file is downloaded to the default download directory. On Desktop user can select where to save the file | ok              | ok               | ok            | ok           | ok         | ok              | ok              | ok               |
| 11 | download template         | user clicks download template button                                                                                               | user can download a .csv template for an exercise book to a location of choice. On mobile: file is downloaded to the default download directory. On Desktop user can select where to save the file       | ok              | ok               | ok            | ok           | ok         | ok              | ok              | ok               |
| 12 | load exercise book        | user clicks load exercise book button                                                                                              | user can select an exercise book .csv file from a location of choice                                                                                                                                     | ok              | ok               | ok            | ok           | ok         | ok              | ok              | ok               |
| 13 | Next/Previous Buttons     | user clicks NEXT button (empty book)                                                                                               | message is displayed that there are no more cards in the exercise book                                                                                                                                   | ok              | ok               | ok            | ok           | ok         | ok              | ok              | ok               |
| 14 | Next/Previous Buttons     | user clicks NEXT button (non-empty book)                                                                                           | next card in the list is displayed                                                                                                                                                                       | ok              | ok               | ok            | ok           | ok         | ok              | ok              | ok               |
| 15 | Next/Previous Buttons     | user clicks NEXT button (non-empty book - last card)                                                                               | message is displayed that there are no more cards in the exercise book                                                                                                                                   | ok              | ok               | ok            | ok           | ok         | ok              | ok              | ok               |
| 16 | Next/Previous Buttons     | user clicks PREV button (empty book)                                                                                               | message is displayed that there are no more cards in the exercise book                                                                                                                                   | ok              | ok               | ok            | ok           | ok         | ok              | ok              | ok               |
| 17 | Next/Previous Buttons     | user clicks PREV button (non-empty book)                                                                                           | previous card in the list is displayed                                                                                                                                                                   | ok              | ok               | ok            | ok           | ok         | ok              | ok              | ok               |
| 18 | Next/Previous Buttons     | user clicks PREV button (non-empty book - first card)                                                                              | message is displayed that there are no more cards in the exercise book                                                                                                                                   | ok              | ok               | ok            | ok           | ok         | ok              | ok              | ok               |
| 19 | flip card buttons         | user clicks on flip card front (empty book)                                                                                        | card flips and the back side of the card is shown and empty and ready to type in the translation                                                                                                         | ok              | ok               | ok            | ok           | ok         | ok              | ok              | ok               |
|    | flip card buttons         | user clicks on flip card front (empty book): enters translation                                                                    | message: function not yet implemented is shown                                                                                                                                                           | ok              | ok               | ok            | ok           | ok         | ok              | ok              | ok               |
| 20 | enter translation         | user types in answer and presses [enter] or enter-button (empty book)                                                              | message: function not yet implemented is shown                                                                                                                                                           | ok              | ok               | ok            | ok           | ok         | ok              | ok              | ok               |
| 21 | show-me button            | user clicks on show-me button (empty book)                                                                                         | current behavior: nothing happens                                                                                                                                                                        | ok              | ok               | ok            | ok           | ok         | ok              | ok              | ok               |
| 22 | correct button            | user clicks on correct button (empty book)                                                                                         | message: function not yet implemented is shown                                                                                                                                                           | ok              | ok               | ok            | ok           | ok         | ok              | ok              | ok               |
| 23 | in-correct button         | user clicks on in-correct button (empty book)                                                                                      | message: function not yet implemented is shown                                                                                                                                                           | ok              | ok               | ok            | ok           | ok         | ok              | ok              | ok               |
| 24 | Next/Previous Buttons     | user clicks NEXT button back (empty book)                                                                                          | message is displayed that there are no more cards in the exercise book                                                                                                                                   | ok              | ok               | ok            | ok           | ok         | ok              | ok              | ok               |
| 25 | Next/Previous Buttons     | user clicks PREV button back (empty book)                                                                                          | message is displayed that there are no more cards in the exercise book                                                                                                                                   | ok              | ok               | ok            | ok           | ok         | ok              | ok              | ok               |
| 26 | flip card buttons         | user clicks on flip card back (empty book)                                                                                         | front side of an empty card is shown                                                                                                                                                                     | ok              | ok               | ok            | ok           | ok         | ok              | ok              | ok               |
| 27 | flip card buttons         | user clicks on flip card front (non-empty book)                                                                                    | back side of the current card is shown and the user can type in the translation or click on show me-button                                                                                               | ok              | ok               | ok            | ok           | ok         | ok              | ok              | ok               |
| 28 | enter translation         | user types in correct answer and presses [enter] or enter-button or show-me-button (non-empty book, correct translation)           | card is green and 1 is added to the results-area "got it"                                                                                                                                                | ok              | ok               | ok            | ok           | ok         | ok              | ok              | ok               |
| 29 | enter translation         | user types in answer and presses [enter] or enter-button or show-me-button (non-empty book, in-correct translation)                | card is red and 1 is added to the results-area "to improve"                                                                                                                                              | ok              | ok               | ok            | ok           | ok         | ok              | ok              | ok               |
| 30 | show-me button            | user clicks on show-me button (non-empty book)                                                                                     | translation is displayed on the card                                                                                                                                                                     | ok              | ok               | ok            | ok           | ok         | ok              | ok              | ok               |
| 31 | correct button            | user clicks on correct button (non-empty book)                                                                                     | card is green and 1 is added to the results-area "got it"                                                                                                                                                | ok              | ok               | ok            | ok           | ok         | ok              | ok              | ok               |
| 32 | in-correct button         | user clicks on in-correct button (non-empty book)                                                                                  | card is red and 1 is added to the results-area "to improve"                                                                                                                                              | ok              | ok               | ok            | ok           | ok         | ok              | ok              | ok               |
| 33 | Next/Previous Buttons     | translation entered -> user clicks NEXT button back (non-empty book)                                                               | translation is ignored and card flips and next card is shown.                                                                                                                                            | ok              | ok               | ok            | ok           | ok         | ok              | ok              | ok               |
| 34 | Next/Previous Buttons     | translation entered -> user clicks PREV button back (non-empty book, not first card)                                               | translation is ignored and card flips and previous card is shown                                                                                                                                         | ok              | ok               | ok            | ok           | ok         | ok              | ok              | ok               |
| 35 | flip card buttons         | translation entered -> user clicks on flip card back (non-empty book)                                                              | card flips back to front                                                                                                                                                                                 | ok              | ok               | ok            | ok           | ok         | ok              | ok              | ok               |
| 36 | add-card                  | user clicks add card (empty book)                                                                                                  | user can type in the original word on the front side of the card                                                                                                                                         | ok              | ok               | ok            | ok           | ok         | ok              | ok              | ok               |
| 37 | add-card                  | add card -> user enters original word and presses [enter] or enter-button (empty book)                                             | card flips to allow user to enter the translation                                                                                                                                                        | ok              | ok               | ok            | ok           | ok         | ok              | ok              | ok               |
| 38 | add-card                  | add card -> user enters original and clicks on flip card front (empty book)                                                        | card flips to allow user to enter the translation                                                                                                                                                        | ok              | ok               | ok            | ok           | ok         | ok              | ok              | ok               |
| 39 | add-card                  | add-card -> original word -> [enter]: user enters translation and presses [enter], correct-button or enter-button (empty book)     | new card is saved and card flips back to the front showing the added card original word                                                                                                                  | ok              | ok               | ok            | ok           | ok         | ok              | ok              | ok               |
| 40 | add-card                  | user clicks add card (non-empty book)                                                                                              | user can type in the original word on the front side of the card                                                                                                                                         | ok              | ok               | ok            | ok           | ok         | ok              | ok              | ok               |
| 41 | add-card                  | add card -> user enters original and clicks on flip card front (non-empty book)                                                    | card flips to the back to allow entering the translation                                                                                                                                                 | ok              | ok               | ok            | ok           | ok         | ok              | ok              | ok               |
| 42 | add-card                  | add card -> user enters original word and presses [enter] or enter-button (non-empty book)                                         | card flips to the back to allow entering the translation                                                                                                                                                 | ok              | ok               | ok            | ok           | ok         | ok              | ok              | ok               |
| 43 | add-card                  | add-card -> original word -> [enter]: user enters translation and presses [enter], correct-button or enter-button (non-empty book) | new card is saved and card flips back to the front showing the added card original word                                                                                                                  | ok              | ok               | ok            | ok           | ok         | ok              | ok              | ok               |
| 44 | add-card                  | add-card -> original word -> [enter]: user clicks NEXT button back (non-empty book)                                                | current behavior: message shows "no more card in the exercise book" and card flips to the front                                                                                                          | ok              | ok               | ok            | ok           | ok         | ok              | ok              | ok               |
| 45 | add-card                  | add-card -> original word -> [enter]: user clicks PREV button back (non-empty book)                                                | current behavior: card flips back to front and shows the original word. only way out of the add card mode is to flip to the back and press either ok or cancel                                           | ok              | ok               | ok            | ok           | ok         | ok              | ok              | ok               |
| 46 | add-card                  | add-card -> original word: user clicks NEXT button front (non-empty book)                                                          | current behavior: message shows "no more card in the exercise book" and card flips to the front                                                                                                          | ok              | ok               | ok            | ok           | ok         | ok              | ok              | ok               |
| 47 | add-card                  | add-card -> original word: user clicks PREV button front (non-empty book)                                                          | current behavior: card flips back to front and shows the original word. only way out of the add card mode is to flip to the back and press either ok or cancel                                           | ok              | ok               | ok            | ok           | ok         | ok              | ok              | ok               |
| 48 | add-card                  | add-card -> original word -> [enter] -> flip card: user clicks delete button                                                       | current behaviour: last card is deleted and if user continues to hit delete all cards will be deleted press by press except for the original word                                                        | ok              | ok               | ok            | ok           | ok         | ok              | ok              | ok               |
| 49 | delete card               | user clicks on delete card (empty book)                                                                                            | message "no more cards in the exercise book" shows                                                                                                                                                       | ok              | ok               | ok            | ok           | ok         | ok              | ok              | ok               |
| 50 | delete card               | user clicks on delete card (non-empty book)                                                                                        | current card is deleted                                                                                                                                                                                  | ok              | ok               | ok            | ok           | ok         | ok              | ok              | ok               |
| 51 | change exercise book data | user clicks on change exercise book name and hits [enter] or clicks anywhere (empty book)                                          | input field opens and user can type in the desired text and change is saved                                                                                                                              | ok              | ok               | ok            | ok           | ok         | ok              | ok              | ok               |
| 52 | change exercise book data | user clicks on change topic and hits [enter] or clicks anywhere (empty book)                                                       | input field opens and user can type in the desired text and change is saved                                                                                                                              | ok              | ok               | ok            | ok           | ok         | ok              | ok              | ok               |
| 53 | change exercise book data | user clicks on change languages and hits [enter] or clicks anywhere (empty book)                                                   | input field opens and user can type in the desired text and change is saved                                                                                                                              | ok              | ok               | ok            | ok           | ok         | ok              | ok              | ok               |
| 54 | change exercise book data | user clicks on change exercise book name and hits [enter] or clicks anywhere (non-empty book)                                      | input field opens and user can type in the desired text and change is saved for this card                                                                                                                | ok              | ok               | ok            | ok           | ok         | ok              | ok              | ok               |
| 55 | change exercise book data | user changes exercise book data and clicks add card enters original and translation                                                | current behaviour: exercise book data edit buttons are lost forever                                                                                                                                      | ok              | ok               | ok            | ok           | ok         | ok              | ok              | ok               |
| 56 | change exercise book data | user clicks on change topic and hits [enter] or clicks anywhere (non-empty book)                                                   | input field opens and user can type in the desired text and change is saved for this card                                                                                                                | ok              | ok               | ok            | ok           | ok         | ok              | ok              | ok               |
| 57 | change exercise book data | user clicks on change languages and hits [enter] or clicks anywhere (non-empty book)                                               | input field opens and user can type in the desired text and change is saved for this card                                                                                                                | ok              | ok               | ok            | ok           | ok         | ok              | ok              | ok               |
| 58 | Next/Previous Buttons     | user clicks on change exercise book name -> NEXT/PREV Button                                                                       | if exercise book name, topic or language was changed the new data is saved for the current card                                                                                                          | ok              | ok               | ok            | ok           | ok         | ok              | ok              | ok               |
| 59 | Next/Previous Buttons     | user clicks on change topic -> NEXT/PREV button                                                                                    | if exercise book name, topic or language was changed the new data is saved for the current card                                                                                                          | ok              | ok               | ok            | ok           | ok         | ok              | ok              | ok               |
| 60 | Next/Previous Buttons     | user clicks on change languages -> NEXT/PREV Button                                                                                | if exercise book name, topic or language was changed the new data is saved for the current card                                                                                                          | ok              | ok               | ok            | ok           | ok         | ok              | ok              | ok               |
| 61 | load exercise book        | user has typed in a few word pairs and then clicks 'load exercise book' button                                                     | warning appears that data will be lost                                                                                                                                                                   | ok              | ok               | ok            | ok           | ok         | ok              | ok              | ok               |
| 62 | UI/UX                     | mobile phone landscape mode                                                                                                        | known issue                                                                                                                                                                                              | nok             | nok              | nok           | nok          | nok        | nok             | nok             | nok              |

### Open Issues
__Merge manual Cards when loading new Exercise Book:__
When a user has manually entered cards and then loads an exercise book the manual cards will be lost.

## Code Validation
### W3 HTML Validator https://validator.w3.org/nu/#textarea
__Results:__
All html pages were checked by the w3 html validator and no errors remain.
<br>
<img src="media/L2L_HTML_validator_results.png"  width="300" height="auto" alt="W3 HTML Validator Results">
<br>

### CSS Validator https://jigsaw.w3.org/css-validator/validator
__Results:__
All css files were checked by the w3c css validator and no errors remainn. Remaining warnings are due to the use of css variables.
<br>
<img src="media/L2L_CSS validator_results.png"  width="300" height="auto" alt="W3 CSS Validator Results">
<br>

## Deployment
This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub) 

The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here: https://troeske.github.io/love-to-learn/  

## Credits
### Tutorials
no tutorials were used

### Code
W3Schools: https://www.w3schools.com/
MDN Web Docs: https://developer.mozilla.org/en-US/
GeeksForGeeks: https://www.geeksforgeeks.org/

The core of following functions was provided by Github Copilot:

    (1)  the upload/import of an exisiting .CSV file (incl. handleFileSelect(), csvToArray() )
    (2)  the 3D flip card design and animation (incl. respective code in DOMContentLoaded EventListner)
    (3)  drawDividerBack(), drawDividerFront()
    (4)  the convert array to CSV conversion: convertArrayToCSV()
    (5)  basic struncture of editH2Content() (especially the ***.childNodes[0].nodeValue solution)
    (6)  the basic structure idea of a modal dialog of the greetUser() function 


### Graphics
icons: https://fontawesome.com/
favicon: https://www.freepik.com/icon

### Photos

### Any other resources
https://validator.w3.org/nu/#textarea
https://jigsaw.w3.org/css-validator/validator


