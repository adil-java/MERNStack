const fs = require('fs');
const filePath = './Todo/task.json';
let command = process.argv[2];
let argu1 = process.argv[3];
let argu2 = process.argv[4];
const updateTask=(index,update)=>{
    let tasks = listTask();
    if((index >= 0 && index < tasks.length)){
    tasks[index].task=update;
    saveTasks(tasks);
    console.log('Update Successfully!!')}
    else{
        addTask(update)

    }
}
const saveTasks=(tasks)=>{
    // console.log(tasks)
    const dataJSONS =JSON.stringify(tasks)
    // console.log(dataJSONS)
    fs.writeFileSync(filePath,dataJSONS)
}
const addTask = (task) => {
    try{
    let tasks = listTask();
    tasks.push({task});
    saveTasks(tasks); 
    console.log("Task is added!");}
    catch(error){
        console.log(`Error : ${error}`)
    }
};
const listTask=()=>{
    try {
        const dataBuffer = fs.readFileSync(filePath)
        // console.log(dataBuffer)
        const dataJson = dataBuffer.toString();
         return JSON.parse(dataJson);
        // console.log(data);
    } catch (error) {
       return []

    }
   
}
const removeTask=(index)=>{
    let tasks= listTask();
    tasks.splice(index,1);
    saveTasks(tasks);

}
if(command === 'add'){
    addTask(argu1)
    
}
else if(command ==="list"){
    let data =listTask();
    data.forEach((item,index) => {
        console.log(`${index+1}. ${item.task}`)
    });
}
else if(command ==="remove" ){
    removeTask(parseInt(argu1))
}
else if(command === "update"){
    updateTask(argu1 , argu2)
}