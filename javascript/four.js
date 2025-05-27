//array

var even=[];
(function()
{
    for(let i=0;i<100;i++)
    {
        if(i%2==0)
            {
                even.push(i);
            }
        else{
            continue;
        }
    }
    console.log("even numbers are:");
    console.log(even);
})();
    