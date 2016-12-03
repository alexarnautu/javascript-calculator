"use strict";
var value = 0;
var changed = false;
var memValue = 0;
var lastValue = 0;
var operation = "none";
var inputDisplay;

function updateDisplay() {
    inputDisplay.value = value;
}

function clearDisplay() {
    inputDisplay.value = "0";
}


document.addEventListener("DOMContentLoaded", function (event) {
    inputDisplay = document.getElementById('display');

    // Events for number buttons
    var numberMap = {
		zero: 	0, one: 	1,
		two: 	2, three: 	3,
		four: 	4, five: 	5,
		six: 	6, seven: 	7,
		eight: 	8, nine: 	9
	};
	var handleNumberButtonClick = function (clickEvent) {
		value = value * 10 + numberMap[clickEvent.target.id];
		updateDisplay();
	};
	for (var numberButton in numberMap) {
		document.getElementById(numberButton).onclick = handleNumberButtonClick;
	}

    // Events for operation buttons
    document.getElementById('clear').onclick = function () {
        value = 0;
        memValue = 0;
        lastValue = 0;
        updateDisplay();
    };
    document.getElementById('add').onclick = function () {
        if (changed === false) {
            memValue = value;
            value = 0;
        }
        operation = "add";
        changed = true;
        updateDisplay();
    };
    document.getElementById('sub').onclick = function () {
        if (changed === false) {
            memValue = value;
            value = 0;
        }
        operation = "sub";
        changed = true;
        updateDisplay();
    };
    document.getElementById('mul').onclick = function () {
        if (changed === false) {
            memValue = value;
            value = 0;
        }
        operation = "mul";
        changed = true;
        updateDisplay();
    };
    document.getElementById('div').onclick = function () {
        if (changed === false) {
            memValue = value;
            value = 0;
        }
        operation = "div";
        changed = true;
        updateDisplay();
    };
    document.getElementById('result').onclick = function () {
		if (changed === true) {
			lastValue = value;
			value = memValue;
		}
		switch (operation) {
			case 'add':
				value += lastValue;
				break;
			case 'sub':
				value -= lastValue;
				break;
			case 'mul':
				value *= lastValue;
				break;
			case 'div':
				value /= lastValue;
				break;
		}
        changed = false;
        updateDisplay();
    };

});
