let expand = document.querySelector(".img");
let outer = document.querySelector(".outer");

let newContent = document.createElement('h2');
newContent.innerHTML = `<div class="flex place-content-between rounded-md bg-slate-600 text-cyan-300">
    <div class="content">
        <p>I am Inside</p>
    </div>
  </div>`;

expand.addEventListener("click", () => {
    //  (!outer.contains(newContent)) { // Check if newContent is already appended
        outer.appendChild(newContent);
    
    // expand.style.transform = "rotate(90deg)";
});

newContent.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent click event from bubbling up to the expand element
    newContent.remove();
});
