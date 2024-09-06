let blue = document.getElementsByClassName('blue')[0];
let red = document.getElementsByClassName('red')[0];
let black= document.getElementsByClassName('black')[0];
let grey = document.getElementsByClassName('grey')[0];
let reset = document.getElementsByClassName('reset')[0];
let body = document.getElementsByTagName('body')[0];
let allcolor = document.querySelectorAll("div");
allcolor.forEach(function(e) {
    e.addEventListener('click', function() {
        if (e.id===('blue')) {
            body.style.backgroundColor = e.id;}
            else if (e.id===('red')) {
                body.style.backgroundColor = e.id;}
                else if (e.id===('black')) {
                    body.style.backgroundColor = e.id;}
                    else if (e.id===('grey')) {
                        body.style.backgroundColor = e.id;}
                      else if(e.id==='white'){
                        body.style.backgroundColor = e.id;
                      }
});
    });   
    console.log(allcolor)
// });
// blue.addEventListener('click',()=>{
//     body.style.backgroundColor ='blue';

// })
// red.addEventListener('click',()=>{
//     body.style.backgroundColor ='red';

// })
// red.addEventListener('click',()=>{
//     body.style.backgroundColor ='red';

// })
// black.addEventListener('click',()=>{
//     body.style.backgroundColor ='black';

// })
// grey.addEventListener('click',()=>{
//     body.style.backgroundColor ='grey';

// })


