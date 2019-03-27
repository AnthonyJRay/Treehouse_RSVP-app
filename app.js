const form = document.getElementById('registrar');      // Assigning the form element to 'form' variable.
const input = document.querySelector('input');          // Assigning the input to 'input' variable.
const ul = document.getElementById('invitedList');      // Stores the ul with id 'invitedList' to variable 'ul'

function createLi(text) {
    const li = document.createElement('li');            // Creates a new 'li' item
    li.textContent = (text);                            // Sets the content of the 'li' item to the 'text' input.value
    const label = document.createElement('label');      // Creates a 'label' element.
    label.textContent = 'Confirmed';                    // Adds the text 'Confirmed' to label element.
    const checkbox = document.createElement('input');   // Creates an input variable named 'checkbox'.
    checkbox.type = 'checkbox';                         // Sets the variable 'checkbox' type to 'checkbox'
    label.appendChild(checkbox);                        // Appends the checkbox to the label element.
    li.appendChild(label);                              // Appends the label element to the li.
    const button = document.createElement('button');    // Creates a button element with variable name button
    button.textContent = 'remove';                      // Sets the buttons content to be removed       
    li.appendChild(button);                             // Appends the button to the li element.
    return li;
}

form.addEventListener('submit', (e) => {                // Starts an event to listen for a 'submit' action.
    e.preventDefault();                                 // Preventing the default browser behavior from refreshing the page upon submit.
    const text = input.value;                           // Stores the user input value in variable 'text'
    input.value = '';                                   // Clears input field after submitting a name. 
    const li = createLi(text); 
    ul.appendChild(li);                                 // Appends the li item to the ul element.                            
});

ul.addEventListener('change', (e) => {                  // Added an event listener to look for change
    const checkbox = event.target;                      // Set event.target to checkbox
    const checked = checkbox.checked;                   // Set if the checkbox is checked to variable checked
    const listItem = checkbox.parentNode.parentNode;    // Using parentNode to bubble up the dom tree

    if (checked) {                                      // If the checkbox is checked
        listItem.className = 'responded';               // Give class name 'responded'    
    } else {                                            // Or else
        listItem.className = '';                        // 
    }
});

ul.addEventListener('click', (e) => {                   // Adds an event listener to the ul to listen for clicks.
    if (e.target.tagName == 'BUTTON') {                 // If the target is a button with a ul
        const li = e.target.parentNode;                 // Sets the li to the child of ul                     
        const ul = li.parentNode;                       // Sets the ul in a variable as a parent to li      
        ul.removeChild(li);                             // Remove the li child element of ul
    }
});