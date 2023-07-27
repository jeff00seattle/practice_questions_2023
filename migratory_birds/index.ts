'use strict';

import * as fs from "fs";

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

function readLine(): string {
    return inputLines[currentLine++];
}

/*
 * Complete the 'migratoryBirds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function migratoryBirds(arr: number[]): number {
    type migratoryData = {
        [key: string]: number
    }

    const migCount: migratoryData = {};
    arr.forEach(function(i) { migCount[String(i)] = (migCount[String(i)]||0) + 1;});
    // console.log(migCount);
    let maxKey = 0;
    let maxValue = 0;

    Object.keys(migCount).forEach((key:string) => {
        if (migCount[key] > maxValue) {
            maxKey = Number(key);
            maxValue = migCount[key];
        }
    });

    return maxKey;
}

inputString = fs.readFileSync('./test_data/test_case_1.txt', 'utf-8');

inputLines = inputString.split('\n');

const arrCount: number = parseInt(readLine().trim(), 10);

const arr: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

const result: number = migratoryBirds(arr);

console.log(result + '\n');
