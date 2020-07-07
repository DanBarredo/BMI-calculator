const result = document.querySelector('#bmi-result');
const btn = document.querySelector(".btn");
const colours = ["red", "green"];


btn.addEventListener('click', function(e) {
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);

    // console.log("height=" + height);
    // console.log("weight=" + weight);

    if (height < 0 || height === "" || isNaN(height)) {
        alert("Please enter a valid height in cm");
    }
    if (weight < 0 || weight === "" || isNaN(weight)) {
        alert("Please enter a valid weight in kg");
    }
    else {
        const bmi = calculateBMI(height, weight);
        result.innerHTML = bmi;
        // console.log("BMI = " + bmi);

        if (bmi < 18.6 || bmi > 24.9) {
            result.style.color = "red";
        }
        else {
            result.style.color = "green";
        }
    }
});

function calculateBMI(height, weight) {
        var bmi = (weight / ((height*height) / 10000)).toFixed(2);
        return bmi;
};



