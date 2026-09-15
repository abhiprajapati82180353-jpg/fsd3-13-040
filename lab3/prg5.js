import http from 'http'

const server=http.createServer((req,res)=>{
    //req method-->Get,post,put,delete,patch
    console.log('Method:',req.method);
    console.log('URL:',req.url);

    // brower can send only get request to server 
    // post/put/patch/delete--> can be check by api tester
    if(req.url==="/"){
        res.setHeader("content-type","text/html");
        res.end("<h1> Hello Server </h1>");

    }
    else if(req.url==="products"){
        const products=[
            {id:1, name:"bottle"},
            {id:2, name:"laptop"},
        ];
        res.writeHead(200,{"content-type":"application/json"});
        res.end(JSON.stringify(products));
    }
    else{
        res.end();
    }


});

server.listen(5001, ()=> console.log("prg5 is running"));