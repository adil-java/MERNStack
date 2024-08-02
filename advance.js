let increase = document.getElementById('inc');
let decrease =document.getElementById('dec');
let count= 0;


    increase.addEventListener('click',()=>{
        count++;
        document.getElementById('val').innerHTML=`<p>current value is: ${count}</p>`
        
    })
    
    decrease.addEventListener('click',()=>{
        if (count > 0) {
            count--;
            document.getElementById('val').innerHTML = `<p>current value is: ${count}</p>`;
        }
        
            
        console.log("Hey")
})