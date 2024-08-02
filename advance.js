let increase = document.getElementById('inc');
let decrease =document.getElementById('dec');
let count= 0;
let main = document.getElementById('main');
let msg = document.createElement('div');
msg.id = "val";
let p = document.createElement('p');
main.appendChild(msg);
msg.appendChild(p)


    increase.addEventListener('click',()=>{
        count++;
        p.innerHTML=`<p>current value is: ${count}</p>`
        
    })
    
    decrease.addEventListener('click',()=>{
        if (count > 0) {
            count--;
            p.innerHTML = `<p>current value is: ${count}</p>`;
        }
        
            
        console.log("Hey")
})