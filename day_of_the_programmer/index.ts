'use strict';

import * as fs from "fs";

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

function readLine(): string {
    return inputLines[currentLine++];
}

/*
 * Complete the 'dayOfProgrammer' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER year as parameter.
 */

function dayOfProgrammer(year: number): string {
    let day: number = 13;
    if (year < 1918) {
        if ((year % 4) === 0) {
            day = 12;
        }
    } else if (year >= 1919) {
        if (((year % 400) === 0) || (((year % 4) === 0) && ((year % 100) !== 0))) {
            day = 12;
        }
    } else if (year === 1918) {
        day += ((31 + 14) - 32);
    }
    return String(day) + '.09.' + String(year);
}

inputString = fs.readFileSync('./test_data/test_case_59.txt', 'utf-8');

inputLines = inputString.split('\n');

const year: number = parseInt(readLine().trim(), 10);

const result: string = dayOfProgrammer(year);

console.log(result + '\n');
