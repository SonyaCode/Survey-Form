let inputs = document.getElementsByClassName("required");
let isValid = true;

for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value === null || inputs[i].value === "") {
        isValid = false;
        break;
    }
}

function submitButton() {
    if (isValid) {
        alert("Thank you for submitting the survey. However, no data will be recorded because this is a mock website.");
        return true;
    }
    return false;
}