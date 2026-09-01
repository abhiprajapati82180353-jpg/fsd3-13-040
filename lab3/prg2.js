import http from 'http'
const server =http.createServer((req,res)=>{
    res.write("<h1>Hello Abhishek</h1>");
    res.end();
});
server.listen(4444,()=> console.log("server is running at 4444..."));