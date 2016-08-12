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
    document.getElementById('zero').onclick = function () {
        value = value * 10 + 0;
        update_display();
    };
    document.getElementById('one').onclick = function () {
        value = value * 10 + 1;
        update_display();
    };
    document.getElementById('two').onclick = function () {
        value = value * 10 + 2;
        update_display();
    };
    document.getElementById('three').onclick = function () {
        value = value * 10 + 3;
        update_display();
    };
    document.getElementById('four').onclick = function () {
        value = value * 10 + 4;
        update_display();
    };
    document.getElementById('five').onclick = function () {
        value = value * 10 + 5;
        update_display();
    };
    document.getElementById('six').onclick = function () {
        value = value * 10 + 6;
        update_display();
    };
    document.getElementById('seven').onclick = function () {
        value = value * 10 + 7;
        update_display();
    };
    document.getElementById('eight').onclick = function () {
        value = value * 10 + 8;
        update_display();
    };
    document.getElementById('nine').onclick = function () {
        value = value * 10 + 9;
        update_display();
    };

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
