function appendToDisplay(value) {
    let display = document.getElementById("t1");
    display.value += value;
}


function calculate() {
    let display = document.getElementById("t1");
    try {
        display.value = eval(display.value); 
    } catch (error) {
        display.value = "Error"; 
    }
}


function clearDisplay() {
    document.getElementById("t1").value = "";
}
