(function max()
{
    var a=[1,20,24,40,4,88,1,-200,99];
    let big=a[0];
    for(let i=0;i<a.length;i++)
    {
        if(a[i]>big)
        {
            big=a[i];
        }
    }
    console.log(`Biggest No in array is ${big}`);

})();

