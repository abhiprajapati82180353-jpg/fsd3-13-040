import http from 'http'

const server=http.createServer((req,res)=>{
    //req method-->Get,post,put,delete,patch
    console.log('Method:',req.method);
    console.log('URL:',req.url);

    // brower can send only get request to server 
    // post/put/patch/delete--> can be check by api tester


});