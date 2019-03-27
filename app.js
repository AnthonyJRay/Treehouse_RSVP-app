const form = document.getElementById('registrar');      // Assigning the form element to 'form' variable.
const input = document.querySelector('input');          // Assigning the input to 'input' variable.

form.addEventListener('submit', (e) => {                // Starts an event to listen for a 'submit' action.
    e.preventDefault();                                 // Preventing the default browser behavior from refreshing the page upon submit.
    const text = input.value;                           // Stores the user input value in variable 'text'
    input.value = '';                                   // Clears input field after submitting a name.
    const ul = document.getElementById('invitedList');  // Stores the ul with id 'invitedList' to variable 'ul'
    const li = document.createElement('li');            // Creates a new 'li' item
    li.textContent = (text);                            // Sets the content of the 'li' item to the 'text' input.value
    ul.appendChild(li);                                 // Appends the created 'li' item to the 'ul' element.
});