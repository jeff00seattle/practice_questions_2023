'use strict';

import * as fs from "fs";

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

function readLine(): string {
    return inputLines[currentLine++];
}

/*
 * Complete the 'birthday' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY s
 *  2. INTEGER d
 *  3. INTEGER m
 */

function birthday(s: number[], d: number, m: number): number {
    let segmentCount = 0;
    s.map((value, index, array) => {
        if (index + m > s.length) {
            return;
        }
        const segment = array.slice(index, index + m);
        console.log(JSON.stringify({m, index, segment, length: s.length}));
        const segmentSum = segment.reduce((a, b) => { return a + b; }, 0);

        console.log(JSON.stringify({d, segmentSum}));

        if (segmentSum != d) {
            return;
        }

        segmentCount++;
    });

    return segmentCount;
}

inputString = fs.readFileSync('./test_data/test_case_1.txt', 'utf-8');

inputLines = inputString.split('\n');

const n: number = parseInt(readLine().trim(), 10);

const s: number[] = readLine().replace(/\s+$/g, '').split(' ').map(sTemp => parseInt(sTemp, 10));

const firstMultipleInput: string[] = readLine().replace(/\s+$/g, '').split(' ');

const d: number = parseInt(firstMultipleInput[0], 10);

const m: number = parseInt(firstMultipleInput[1], 10);

const result: number = birthday(s, d, m);

console.log(result + '\n');
