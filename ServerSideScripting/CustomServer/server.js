const http= require('http');
const fs = require('fs');
const path= require('path');
const port = 3000;
const server = http.createServer((req,res)=>{
    
    const FilePath =path.join(__dirname,req.url==="/" ? "index.html" : req.url)
    const Extname=String(path.extname(FilePath)).toLowerCase()
    console.log(FilePath)
    const exttype={
        ".html":"text/html",
        ".css":"text/css"
    }
    const contentType = exttype[Extname] || 'application/octet-stream'
   
    
    fs.readFile(FilePath,(err,content)=>{
        if(err){
            if(err.code==="ENOENT"){
                res.writeHead(404,{"Content-Type":"text/html"})
                res.end("404:File Nahi hai bhaii")
            }
        }
        else{
            res.writeHead(200,{'Content-Type':contentType})
            res.end(content,'utf-8')
        }
    })

})
    server.listen(port,()=>{
    console.log("Server is listing at:",`http:localhost:${port}`)
})
