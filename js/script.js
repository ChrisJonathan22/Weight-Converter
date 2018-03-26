// Store a reference of the output section
let output = document.getElementById("output");

// Hide the output section when the window loads up
output.style.visibility = "hidden";

// Store the input element
let lbsInput = document.getElementById("lbsInput");

// Add an event listener to the input element
lbsInput.addEventListener("input", function(e){
    // Showing the output section when we start entering number in the number field
    output.style.visibility = "visible";

    // Storing the value entered
    let lbs = e.target.value;

    // If the input field is empty hide the output section once more
    if(!lbs){
        output.style.visibility = "hidden";
    }

    // Take the value entered and convert it to grams, kilograms and ounces with some Math.
    document.getElementById("gramsOutput").innerHTML = lbs / 0.0022046;
    document.getElementById("kgOutput").innerHTML = lbs / 2.2046;
    document.getElementById("ozOutput").innerHTML = lbs * 16;
    
    
});
