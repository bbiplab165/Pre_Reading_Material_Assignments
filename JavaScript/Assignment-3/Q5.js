// JavaScript program to find the cumulative sum of an array.
// Initial Array: [1, 2, 3, 4]
// Cumulative Sum: [1, 3, 6, 10]
// Explanation: [1, (1+2), (1+2+3), (1+2+3+4)]

const a=[1, 2, 3, 4];
let s=0;
let b=[];
for(let i=0;i<a.length;i++)
{
    s=s+a[i];
    b[i]=s;
}
console.log(b);