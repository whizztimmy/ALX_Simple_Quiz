// Function to check the user's answer
function checkAnswer() {
    // Define the correct answer
    const correctAnswer = "4";

    // Get the selected radio button
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Check if the user selected an option
    if (selectedOption) {
        const userAnswer = selectedOption.value;

        // Select the feedback element
        const feedback = document.getElementById("feedback");

        // Compare user's answer with the correct answer
        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
            feedback.style.color = "green";
        } else {
            feedback.textContent = "That's incorrect. Try again!";
            feedback.style.color = "red";
        }
    } else {
        // If no option is selected, prompt the user
        alert("Please select an answer before submitting.");
    }
}

// Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
