//Linear Sort

let a=[2,6,8,11,5,1];

for(let i=0;i<a.length;i++)
{
    let k=a[i]; 
    for(let j=i+1;j<a.length;j++)
    {
        if(k>a[j])
        {
            let n=k;
            k=a[j];
            a[j]=n;
        }
    }
    a[i]=k;
}
console.log(a);
