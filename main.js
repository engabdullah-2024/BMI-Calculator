function calculateBMI() {
    const age = document.getElementById("age").value;
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;

    if (!age || !height || !weight) {
        alert("Please enter all fields");
        return;
    }

    // Convert height from cm to meters
    const heightInMeters = height / 100;

    // Calculate BMI
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

    // Display BMI
    document.getElementById("bmi").innerText = bmi;

    // Determine status
    let status = "";
    if (bmi < 18.5) {
        status = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        status = "Normal weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
        status = "Overweight";
    } else {
        status = "Obese";
    }

    document.getElementById("status").innerText = status;

    // Show result
    document.getElementById("result").style.display = "block";
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
