'use strict';
import * as fs from "fs";

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

function readLine(): string {
    return inputLines[currentLine++];
}

/*
 * Complete the 'kangaroo' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER x1
 *  2. INTEGER v1
 *  3. INTEGER x2
 *  4. INTEGER v2
 */

function number_line_jump(x1: number, v1: number, x2: number, v2: number): string {
  let d1 = x1 + v1;
  let d2 = x2 + v2;

  const xDiff = (x2 - x1);
  const vDiff = (v2 - v1);
  let dDiff = (d2 - d1);

  if (dDiff === 0) {
      return 'YES';
  }

  if (
      (xDiff === 0 && vDiff !== 0) ||
      (xDiff !== 0 && vDiff === 0) ||
      (xDiff > 0 && vDiff > 0) ||
      (xDiff < 0 && vDiff < 0)) {
      return 'NO';
  }

  const quotient = (x1 - x2) / (v2 - v1)
  const remander = (x1 - x2) % (v2 - v1);

  if ((quotient <= 0) || Math.floor(remander) !== 0) {
      return 'NO';
  }

  return 'YES';
}

inputString = fs.readFileSync('./test_data/test_case_1.txt', 'utf-8');

inputLines = inputString.split('\n');

const firstMultipleInput: string[] = readLine().replace(/\s+$/g, '').split(' ');

const x1: number = parseInt(firstMultipleInput[0], 10);

const v1: number = parseInt(firstMultipleInput[1], 10);

const x2: number = parseInt(firstMultipleInput[2], 10);

const v2: number = parseInt(firstMultipleInput[3], 10);

const result: string = number_line_jump(x1, v1, x2, v2);

console.log(result + '\n');
