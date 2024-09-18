let display = document.getElementById('display');

function clearDisplay() {
    display.value = '';
}

function deleteDigit() {
    display.value = display.value.slice(0, -1);
}

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    display.value += operator;
}

function appendDot() {
    if (!display.value.includes('.')) {
        display.value += '.';
    }
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function setMode(mode) {
    display.value = mode;
}

function showTab(tab) {
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.add('hidden');
    });
    document.getElementById(tab).classList.remove('hidden');
    document.querySelectorAll('.tab').forEach(button => {
        button.classList.remove('active');
    });
    document.querySelector(`[onclick="showTab('${tab}')"]`).classList.add('active');
}
