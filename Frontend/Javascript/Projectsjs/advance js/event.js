let display = document.querySelector("#display");
let color = ["red","yello ","blue"];
let i = 1;
let j = 3;
// document.body.addEventListener("keypress", (e) => {
//     display.innerHTML += e.key;
//     let random = Math.floor(Math.random()*color.length)
//         display.style.color += color[random];
// }, false);

document.querySelector("#primary").addEventListener("click",(e)=>{
    //   console.log();
    if(e.target.tagName === 'IMG'){

        let p = e.target.parentNode;
        p.remove();
    }
    })
// console.log(all)