https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

https://www.tutorialspoint.com/typescript/typescript_array_every.htm

```typescript
const isBigEnough = (element: any, index: number, array: any[]): boolean => { 
    console.log(JSON.stringify({element, index, array}))
   return (element >= 10); 
} 

const passed = [12, 5, 8, 130, 44].every(isBigEnough); 
console.log("Test Value : " + passed );
```

https://www.geeksforgeeks.org/how-to-write-a-function-that-returns-array-elements-larger-than-a-number-in-javascript/

https://www.decodingweb.dev/js-integer-division

https://bobbyhadz.com/blog/javascript-get-difference-between-two-sets

https://studyalgorithms.com/array/hackerrank-between-two-sets/
