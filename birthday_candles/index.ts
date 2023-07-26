import * as fs from "fs";

let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;

function readLine(): string {
    return inputLines[currentLine++];
}

/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

function birthdayCakeCandles(candles: number[]): number {
    const candleTallest = Math.max(...candles);

    return candles.filter(candle => candle === candleTallest).length;
}

inputString = fs.readFileSync('./test_data/test_case_8.txt', 'utf-8');

inputLines = inputString.split('\n');

const candlesCount: number = parseInt(readLine().trim(), 10);
console.log(candlesCount)

const candles: number[] = readLine().replace(/\s+$/g, '').split(' ').map(candlesTemp => parseInt(candlesTemp, 10));
console.log(candles)

const result: number = birthdayCakeCandles(candles);
console.log(result)
