const form = document.getElementById('registrar');      // Assigning the form element to 'form' variable.
const input = document.querySelector('input');          // Assigning the input to 'input' variable.
const mainDiv = document.querySelector('.main');        // Assigns the div element with class '.main' to variable 'mainDiv'
const ul = document.getElementById('invitedList');      // Stores the ul with id 'invitedList' to variable 'ul'

const div = document.createElement('div');              // Creates a div element     
const filterLabel = document.createElement('label');    // Creates a label element
const filterCheckBox = document.createElement('input'); // Creates an input element

filterLabel.textContent = "Hide those you haven't responded";   // Sets the text for label
filterCheckBox.type = 'checkbox';                               // Sets the input type to 'checkbox
div.appendChild(filterLabel);                                   // Appends the label as a child to the div
div.appendChild(filterCheckBox);                                // Appends the checkbox as a child to the div below label.
mainDiv.insertBefore(div, ul);                                  // Inserts the new div element before the ul in mainDiv.

filterCheckBox.addEventListener('change', (e) => {              //
    const isChecked = e.target.checked;                         //   Adds a checkbox to the page to filter those invitees,
    const lis = ul.children;                                    //   who have confirmed their invitations or not.
    if(isChecked) {                                             //
        for (let i = 0; i < lis.length; i += 1) {               //   Loops through the invitees checking if responded
            let li = lis[i];                                    //   or not.
            if (li.className == 'responded') {                  //
                li.style.display = '';                          //   If they have not been confirmed, filter them out with the
            } else {                                            //   checkbox to hide those who haven't responded.
               li.style.display = 'none';                       //
            }                                                   //
        }                                                       //
    } else {                                                    //
        for (let i = 0; i < lis.length; i += 1) {               //
        let li = lis[i];                                        //
        li.style.display = '';                                  //
        }
    }
});                                                    

function createLi(text) {
    const li = document.createElement('li');            // Creates a new 'li' item
    const span = document.createElement('span');        // Creates span element
    span.textContent = (text);                          // Sets the content of the span element to a 'text' input.value
    li.appendChild(span);                               // Appends the span to li
    const label = document.createElement('label');      // Creates a 'label' element.
    label.textContent = 'Confirmed';                    // Adds the text 'Confirmed' to label element.
    const checkbox = document.createElement('input');   // Creates an input variable named 'checkbox'.
    checkbox.type = 'checkbox';                         // Sets the variable 'checkbox' type to 'checkbox'
    label.appendChild(checkbox);                        // Appends the checkbox to the label element.
    li.appendChild(label);                              // Appends the label element to the li.

    const editButton = document.createElement('button');    // Creates a button for edit
    editButton.textContent = 'edit';                        // Sets the content of the button to 'edit'
    li.appendChild(editButton);                             // Appends the editButton to the li element.

    const removeButton = document.createElement('button');    // Creates a button element with variable name button
    removeButton.textContent = 'remove';                      // Sets buttons text to 'remove'       
    li.appendChild(removeButton);                             // Appends the button to the li element.
    return li;                                                // Returns the function li
}

form.addEventListener('submit', (e) => {                // Starts an event to listen for a 'submit' action.
    e.preventDefault();                                 // Preventing the default browser behavior from refreshing the page upon submit.
    const text = input.value;                           // Stores the user input value in variable 'text'
    input.value = '';                                   // Clears input field after submitting a name. 
    const li = createLi(text);                          // Stores the createLi function in a variable named li
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
        const button = e.target;                        // Set e.target in variable button for better readability
        const li = button.parentNode;                   // Sets the li to the child of ul                     
        const ul = li.parentNode;                       // Sets the ul in a variable as a parent to li  
        if (button.textContent == 'remove') {           // Added if content == remove to distinguish between edit and remove buttons.   
        ul.removeChild(li);                             // Remove the li child element of ul
    
    } else if (button.textContent == 'edit') {          // Or else if the button content is equal to 'edit'
        const span = li.firstElementChild;              // Selects the span using the first child of li
        const input = document.createElement('input');  // Creates input element to replace span with
        input.type = 'text';                            // Sets the input type to be text
        input.value = span.textContent;                 // Sets the value of the input element to the textContent of the span.
        li.insertBefore(input, span);                   // Inserts the span element into the DOM, with input coming before.
        li.removeChild(span);                           // Removes the span to remove the text.
        button.textContent = 'save';                    // Changes the button text from 'Edit' to 'Save'
    
    } else if (button.textContent == 'save') {          // -----------------------------------------
        const input = li.firstElementChild;             //
        const span = document.createElement('span');    //  Does the exact same as the code block above,
        span.textContent = input.value;                 //  just reversed the input and span elements,
        li.insertBefore(span, input);                   //  to create a 'save' button while in an edit state,
        li.removeChild(input);                          //  in order to save changes and exit the edit state.
        button.textContent = 'edit';                    //------------------------------------------
        }
    }    
});