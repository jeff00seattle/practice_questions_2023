'use strict';
import * as fs from "fs";

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

function readLine(): string {
    return inputLines[currentLine++];
}

/*
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function getTotalX(a: number[], b: number[]): number {
    let factor: number = 0;
    const isFactor = (value: number): boolean => {
        return !(factor % value);
    }
    const hasFactor = (value: number): boolean => {
        return !(value % factor);
    }

    let target: number = 0;
    for(factor = 1; factor <= 100; factor++) {
        (a.every(isFactor) && b.every(hasFactor)) && target++;
    }

    return target;
}

inputString = fs.readFileSync('./test_data/test_case_1.txt', 'utf-8');

inputLines = inputString.split('\n');

const firstMultipleInput: string[] = readLine().replace(/\s+$/g, '').split(' ');

const n: number = parseInt(firstMultipleInput[0], 10);

const m: number = parseInt(firstMultipleInput[1], 10);

const arr: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

const brr: number[] = readLine().replace(/\s+$/g, '').split(' ').map(brrTemp => parseInt(brrTemp, 10));

const total: number = getTotalX(arr, brr);

console.log(total + '\n');
