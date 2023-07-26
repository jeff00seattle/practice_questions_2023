'use strict';

import * as fs from "fs";

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;


function readLine(): string {
    return inputLines[currentLine++];
}

/*
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

function breakingRecords(scores: number[]): number[] {
    let scoreCount = [0, 0];
    let scoreMin = 0;
    let scoreMax = 0;

    scores.map((score, index, array) => {
        if (index === 0) {
            scoreMin = score;
            scoreMax = score;
            return;
        }

        if (score > scoreMax) {
            scoreMax = score;
            scoreCount[0]++;
            return;
        }
        if (score < scoreMin) {
            scoreMin = score;
            scoreCount[1]++;
            return;
        }
    });

    return scoreCount;
 }

inputString = fs.readFileSync('./test_data/test_case_1.txt', 'utf-8');

inputLines = inputString.split('\n');

const n: number = parseInt(readLine().trim(), 10);

const scores: number[] = readLine().replace(/\s+$/g, '').split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

const result: number[] = breakingRecords(scores);

console.log(result.join(' ') + '\n');
