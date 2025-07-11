
// Save the reference to text-field into a variable.
const itemName = document.getElementById('itemName');

// Save the reference to new-item button into a variable.
const addButton = document.getElementById('addBtn');

// Save the reference to unordered list into a variable.
const shoppingList = document.getElementById('shoppingList');

// Save the reference to paragraph for feedback
const feedbackParagraph = document.getElementById('feedback');

// Start function addItem.
function addItem() {
    // Create list-item and store output in a variable.
    const listItem = document.createElement('li');
    
    // Check if user entered the value in input text-field.
    if (itemName.value.trim() !== '') {
        // Use textContent property on created list-item
        // and assign it with the value of the text written in the text-field
        listItem.textContent = itemName.value;
        
        // Append list item to unordered list.
        shoppingList.appendChild(listItem);
        
        // Clear a feedback-message.
        feedbackParagraph.textContent = '';
        
        // Clear the text-field.
        itemName.value = '';
        
        // Put the cursor back to text-field
        itemName.focus();
    } else {
        // Print the message nothing entered in the paragraph "feedback"
        feedbackParagraph.textContent = 'Nothing entered';
    }
}

// Register your function addItem for click event on button.
addButton.addEventListener('click', addItem);


