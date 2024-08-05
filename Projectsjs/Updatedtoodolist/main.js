let addval = document.querySelector("#addval");
let submit = document.querySelector("#submit");
let values = document.querySelector('#val');
submit.addEventListener("click", () => {
    if (values.value.trim() === "") {
        alert("Add value");
    }
    else {
        let val = values.value;
        addval.innerHTML+=`<li>
        <img class= "check" src="/advance js/images/emptBox.svg" alt="">
        <p id="p">${val}</p>
        <img class ="bin" src="/advance js/images/din.svg" alt="">
        </li>
        `
    }
    values.value="";
});
addval.addEventListener("click",(e)=>{
    if(e.target.classList.contains("check")){
        if (e.target.getAttribute("src") === "/advance js/images/emptBox.svg") {
            e.target.setAttribute("src", "/advance js/images/box.svg");
            e.target.nextElementSibling.style.textDecoration = "line-through";
        } else {
            e.target.setAttribute("src", "/advance js/images/emptBox.svg");
            e.target.nextElementSibling.style.textDecoration = "none";
        }
    }
    else if(e.target.classList.contains("bin")){
        e.target.parentElement.remove();
    }
})

