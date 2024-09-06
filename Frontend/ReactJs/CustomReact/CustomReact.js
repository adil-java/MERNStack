const CostomRender=(ReactElement,main)=>{
    const create = document.createElement(`${ReactElement.type}`)
    create.innerHTML= ReactElement.childern;
    // create.setAttribute("href",ReactElement.props.href);
    // create.setAttribute("target",ReactElement.props.target);
    // main.appendChild(create);
    //The above Style of setAttribute is problemtic if number of attribute increeas; so
   for (const prop in ReactElement.props) {
        create.setAttribute(prop,ReactElement.props[prop]);
   }
   main.appendChild(create);
}
const ReactElement ={
    type:"a",
    props:{
        href:"https://google.com",
        target:"_blank"
    },
    childern:"Click me to visit Google"
}
const main = document.querySelector("#root");
CostomRender(ReactElement,main) 