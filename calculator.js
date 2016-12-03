"use strict";
var value = 0;
var changed = false;
var mem_value = 0;
var last_value = 0;
var operation = "none";
var inputDisplay;

function update_display() {
    inputDisplay.value = value;
}

function clear_display() {
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
		update_display();
	};
	for (var numberButton in numberMap) {
		document.getElementById(numberButton).onclick = handleNumberButtonClick;
	}

    // Events for operation buttons
    document.getElementById('clear').onclick = function () {
        value = 0;
        mem_value = 0;
        last_value = 0;
        update_display();
    };
    document.getElementById('add').onclick = function () {
        if (changed === false) {
            mem_value = value;
            value = 0;
        }
        operation = "add";
        changed = true;
        update_display();
    };
    document.getElementById('sub').onclick = function () {
        if (changed === false) {
            mem_value = value;
            value = 0;
        }
        operation = "sub";
        changed = true;
        update_display();
    };
    document.getElementById('mul').onclick = function () {
        if (changed === false) {
            mem_value = value;
            value = 0;
        }
        operation = "mul";
        changed = true;
        update_display();
    };
    document.getElementById('div').onclick = function () {
        if (changed === false) {
            mem_value = value;
            value = 0;
        }
        operation = "div";
        changed = true;
        update_display();
    };
    document.getElementById('result').onclick = function () {
        if (operation === "add") {
            if (changed === true) {
                last_value = value;
                value = mem_value;
            }

            value += last_value;
        }
        if (operation === "sub") {
            if (changed === true) {
                last_value = value;
                value = mem_value;
            }

            value -= last_value;
        }
        if (operation === "mul") {
            if (changed === true) {
                last_value = value;
                value = mem_value;
            }

            value *= last_value;
        }
        if (operation === "div") {
            if (changed === true) {
                last_value = value;
                value = mem_value;
            }

            value /= last_value;
        }
        changed = false;
        update_display();
    };

});
