const form = document.getElementById('registrar');      // Assigning the form element to 'form' variable.
const input = document.querySelector('input');          // Assigning the input to 'input' variable.
const ul = document.getElementById('invitedList');      // Stores the ul with id 'invitedList' to variable 'ul'
form.addEventListener('submit', (e) => {                // Starts an event to listen for a 'submit' action.
    e.preventDefault();                                 // Preventing the default browser behavior from refreshing the page upon submit.
    const text = input.value;                           // Stores the user input value in variable 'text'
    input.value = '';                                   // Clears input field after submitting a name.  
    const li = document.createElement('li');            // Creates a new 'li' item
    li.textContent = (text);                            // Sets the content of the 'li' item to the 'text' input.value
    const label = document.createElement('label');      // Creates a 'label' element.
    label.textContent = 'Confirmed';                    // Adds the text 'Confirmed' to label element.
    const checkbox = document.createElement('input');   // Creates an input variable named 'checkbox'.
    checkbox.type = 'checkbox';                         // Sets the variable 'checkbox' type to 'checkbox'
    label.appendChild(checkbox);                        // Appends the checkbox to the label element.
    li.appendChild(label);                              // Appends the label element to the li.
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