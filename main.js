// Click Counter

// Global Variable
let count = 0;

// Add Event Listener to the document 
document.addEventListener("click", clickCount);

// Event Function
function clickCount() {
    count++
    document.getElementById("count-display").innerHTML = count;
}