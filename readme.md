# FSD-CSE13
# npm (node package manager)
used to install,run,unistall any program/project and package 
--npm install <packageName>
--npm unistall<packageName>
to use npm,the project must be npm projects
to creat npm project we can use
-npm init -y
-it creat a package.json file aotomaticaly
pakage.json holds all the imformation ralated to istall pakage from npm
-it also creats a folder node_modules aotomatically
-node_modulus hold the package/library files
-generally we ignore the node_modulus by .gitignore

Nodemon - it restart the server automatically when file changes,to install

> npm i nodemon -D

Note: -D flag will install this package as developer dependency

- to excute any program,update the package.json file then start the server as 
<b>npm run dev</b>
- start -> it will execute the app on deployment
- dev -> it will start server in development phase (only for developer)

-res: it will return contents (json/html/plain) to the user /client 
-req:it will retrive the information from client  to the server
-server send also statuscode  to the client,that indicates the error succes /massage
## statuscodes
-200--> ok
-201-->created
-400-->bad request
-401-->unauthorised
-403-->forbidden
-404--> not found
-500--> internal server error

## content type

-text/plan
-text/html
-applcation/json
-text/css

the content type and status code can be send back to client by two ways

1.res.writeHead
2.res.setHeader
3.res.statusCode
 ## response as html content

1. res.end
end("any html content tag")
2.html file
.read by creat read stream
.pipe with res

## send html file to client
1.html file
-read html file using creatreadstream
-pipe with res object

2.html content
send any html tags/content by using 
res.end('<any html tag>')

## json()
server return data only not html content becuse htmp content will be return by frented devloper.
the data is in json formate

## what is json formate
is always store data in key, value pair enclosed by curly braces 
1.pair of{} will represent one object and its property will be saprate by comma

example..
'''{
    id:1,
    name:"mobile;
    price:25000;
    rating:4.5;
    review:300
}








