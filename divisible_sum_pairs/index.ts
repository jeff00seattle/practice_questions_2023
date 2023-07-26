'use strict';

import * as fs from "fs";

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

function readLine(): string {
    return inputLines[currentLine++];
}

/*
 * Complete the 'divisibleSumPairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER_ARRAY ar
 */

function divisibleSumPairs(n: number, k: number, ar: number[]): number {
    let pairs = 0;
    ar.map((value, index, array) => {
        for(let offset = index + 1; offset < ar.length; offset++) {
            const aSum = array[index] + array[offset];
            const aRem = aSum % k;
            console.log(JSON.stringify({index, aIndex: array[index], offset, aOffset: array[offset], aSum, aRem, k}));
            if (aRem === 0) {
                pairs++;
            }
        }
    })

    return pairs
}

inputString = fs.readFileSync('./test_data/test_case_1.txt', 'utf-8');

inputLines = inputString.split('\n');

const firstMultipleInput: string[] = readLine().replace(/\s+$/g, '').split(' ');

const n: number = parseInt(firstMultipleInput[0], 10);

const k: number = parseInt(firstMultipleInput[1], 10);

const ar: number[] = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

const result: number = divisibleSumPairs(n, k, ar);

console.log(result + '\n');
