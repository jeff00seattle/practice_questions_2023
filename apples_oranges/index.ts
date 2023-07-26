import * as fs from "fs";

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

function readLine(): string {
    return inputLines[currentLine++];
}

function countApplesAndOranges(s: number, t: number, a: number, b: number, apples: number[], oranges: number[]): void {

    const appleRange = apples.map(apple => { return (a + apple)});
    const orangeRange = oranges.map(orange => { return (b + orange)});

    const appleCount = appleRange.filter(apple => { return apple >= s && apple <= t }).length;
    const orangeCount = orangeRange.filter(orange => { return orange >= s && orange <= t}).length;

    console.log(appleCount);
    console.log(orangeCount);
}

inputString = fs.readFileSync('./test-data/test_case_3.txt', 'utf-8');
inputLines = inputString.split('\n');

const firstMultipleInput: string[] = readLine().replace(/\s+$/g, '').split(' ');

const s: number = parseInt(firstMultipleInput[0], 10);

const t: number = parseInt(firstMultipleInput[1], 10);

const secondMultipleInput: string[] = readLine().replace(/\s+$/g, '').split(' ');

const a: number = parseInt(secondMultipleInput[0], 10);

const b: number = parseInt(secondMultipleInput[1], 10);

const thirdMultipleInput: string[] = readLine().replace(/\s+$/g, '').split(' ');

const m: number = parseInt(thirdMultipleInput[0], 10);

const n: number = parseInt(thirdMultipleInput[1], 10);

const apples: number[] = readLine().replace(/\s+$/g, '').split(' ').map(applesTemp => parseInt(applesTemp, 10));

const oranges: number[] = readLine().replace(/\s+$/g, '').split(' ').map(orangesTemp => parseInt(orangesTemp, 10));

console.log(JSON.stringify({s, t, a, b, m, n, apples: apples.length, oranges: oranges.length}))

countApplesAndOranges(s, t, a, b, apples, oranges);
