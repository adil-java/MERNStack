// // // let n =10;
// // // let arr = [1,2,3,4,5];
// // // arr.forEach(e => {
// // //     console.log(`${e} to the  power 2 is:${Math.pow(e,2)}`)
// // // });
// // // let min =10
// // // let max = 20
// // // let rand = Math.random()*(max-min)+min+1;
// // // console.log(Math.floor(rand));
// // // let arr =[1,1,1,2,2,3]
// // // let k =1;
// // // let st=new Set(arr);
// // // let arrst = Array.from(st)
// // // for(i=1;i<=k;i++){
// // //     console.log(arrst[i-1])
// // // }
// // // let date = new Date();
// // // let hours = date.getHours(); // Get the current hour in 24-hour format
// // // let temp = hours > 12 ? hours - 12 : hours; // Convert to 12-hour format
// // // console.log(date.toLocaleString());
// // // arrival=(date1,date2)=>{
// // //     if(date1>date2){
// // //         console.log(`The person 1 arrived first!!`)
// // //     }
// // //     else{
// // //         console.log("The person 2 arrived first!!")
// // //     }
// // //     console.table([date1,date2]);
// // // }


// // //     let date1 =new Date().getMilliseconds();
// // //     let date2 = new Date('2023-11-14').getMilliseconds();
// // //     arrival(date1,date2);
// // // ----------------------Array------------------
// // // const colors = ["red", "yellow", "blue"];
// // // colors[5] = "purple";
// // // colors.forEach((item, index) => {
// // //   console.log(`${index}: ${item}`);
// // // });
// // // // Output:
// // // // 0: red
// // // // 1: yellow
// // // // 2: blue
// // // // 5: purple

// // // console.log(colors.reverse()); // ['purple', empty × 2, 'blue', 'yellow', 'red']
// // // let myarr = [3,5,6,7,9];
// // // let myarr2 = [1,2,4];
// // // console.log(myarr.concat(myarr2).sort());
// // // -------------------------------------Objects---------------------
// // let obj1 = {1:"a",2:"e"};
// // let obj2 = {3:"i",4:"o",5:"u"};
// // // let obj3 ={...obj1,...obj2};//This is possible and easier way to add two objects
// // // let obj3 =obj1.concate(obj2);//This is not possible
// // // console.log(obj1[1]);
// // // console.log(obj3);
// // // let nested_obj= {name:"Adil",
// // //     age: 19,
// // //     address:{street:11,houseNo:125}
// // // }
// // // console.log(nested_obj.address?.street);
// // // let impValues = {devName:"Adil",
// // //     collegeName:"NED",
// // //     semester:"3rd",
// // //     course:"WebEngineering"
// // // }
// // // let ob = impValues
// // // let {devName:name,cousre:cr}=impValues;
// // // // name = "Adil javed";
// // // // This line won't affect impValues.devName because `name` is just a copy of the value
// // // ob.cr = "DSA";
// // // console.log(ob.devName="Adil Javed");
// // // console.log(impValues)
// // // const a = "api.json.js";
// // // fetch(a)
// // //     .then(response => response.json())
// // //     .then(data => {
// // //         console.log(data);
  
// // //     })
// // //     .catch(error => console.error(error));
// // // ---------------------------------All About Functions-----------------
// // // function main(a){
// // //     return `${a}, welcome`
// // // }  
// // // console.log(main("Adil"));
// // // NAMED IIFE
// // (function main(name){
// //     console.log(`Welcome to my world, Mr.${name} `);
// // })("Adil");
// // // ANONYMOUS IIFE
// // ((name)=>{
// //     console.log(`Welcome to my world, Mr.${name} `);
// // })("Adil Javed");
// // // main("Master") This through error due to local scope of main IIFE

// // let mat1= [[1,2,3],[4,5,6],[7,8,9]]
// // let mat2= [[1,2,3],[4,5,6],[7,8,9]]
// // let multi=[[0,0,0],[0,0,0],[0,0,0]];
// // for(i =0;i<mat1.length;i++){
// //     for(j=0;j<mat1[i].length;j++){
// //         for(k=0;k<mat1.length;k++)
// //         multi[i][j]+=(mat1[i][k]*mat2[k][j]);
// //         }
// // }
// // console.log(multi);
// let map =new Map()
// map.set("Pk","Pakistan")
// map.set("In","India")
// map.set("Om","Oman")
// // map ={ 'Pk' : 'Pakistan', 'In' : 'India', 'Om' : 'Oman' }
// // console.log(map);
// // for (const [i,j] of map) {
// //     console.log(i,":",j)
// // }
// let m ={"A":"a","B":"b"}
// let lang = ['CPP','JS','PY']
// for(let i of lang){
//     console.log(i);
// }
// let movies =[{moive:"Dr Doom",actor:"RDJ"},{movie:"DeadPool",actor:"Rayn"},{movie:"Wolverin",actor:"Hugh jackman"}]
// movies.forEach((a)=>{console.log(`${a.moive} and actor is:${a.actor}`)})

// let num = [1,2,3,4,5];
// // let init =0;
// let sum = num.reduce((a,c)=>a+c,0)
// console.log(sum);
// let course =[{name:"Mern",price:999},{name:"Full stack",price:1999},{name:"App dev and web",price:2999}]
// let selected =course.filter((a)=>a.name==="Full stack" || a.name==="Mern").reduce((ac,p)=>ac+p.price,0)
// console.log(selected)
let n =[1,2,3,4,5]
let s=0
n.forEach((s)=>console.log(s+1))
