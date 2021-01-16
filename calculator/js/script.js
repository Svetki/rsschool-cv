function insert(num) {
    document.form.display.value = document.form.display.value + num;
}

function reset() {
    document.form.display.value = "";
}

function backspace() {
    let currentString = document.form.display.value;

    document.form.display.value = currentString.substring(0,currentString.length-1);
}

function equal() {
    let currentString = document.form.display.value;

    if(currentString) {
        document.form.display.value = eval(currentString);
    }
}