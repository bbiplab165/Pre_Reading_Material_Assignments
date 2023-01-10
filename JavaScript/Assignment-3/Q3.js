//JavaScript program to reverse the string using recursion.
function reverse(a)
{
    if(a.length==0)
    {
        return "";
    }
    return reverse(a.slice(1))+a[0];
    
}

const a="apple";
let b=reverse(a)
console.log(b);