//JavaScript Program to find the missing number in a given integer array of 1 to 100
const a=[1,2,3,4,5,6,8,9,10];
for(let i=1;i<=a.length;i++)
{
    if(i!==a[i-1])
    {
        console.log(i);
        break;
    }
}