"use strict";
let value = prompt("Введіть число яке ви хочете піднести до степення?", "0");
let steepen = prompt("Введіть степінь до якого ви хочете піднести число?", "0");
let aperannd1 = Number(value);
let aperand2 = Number(steepen);
let result = aperannd1 ** aperand2;
alert(`Результат піднесення дорівнює ${result}`);