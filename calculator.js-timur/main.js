function insert(num) {
    document.form.textview.value =
    document.form.textview.value + num;
}

function clean() {
    document.form.textview.value = "";
}

function delPrevious() {
    let number = document.form.textview.value;
    document.form.textview.value = number.substring(0, number.length-1);
}

function calculate() {
    let number = document.form.textview.value;
    if(number) {
        document.form.textview.value = eval(number);
    }
}





