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

## headers is used to tell the client ,the type of data send by the server it may be 
## html file,json data,plan text file,css file,any tokens(for login)
   
   ## Header
   1.text/plan-->text file
   2.text/html-->html contents/file
   application/json-->json contents/file
   text/css->styleshet
   application/form-data-->for uploading file
   application /auth-->for tokens
   the header can be set 
## get
no parametre will pass to the server when we recive all item.

## post(recoered add)
add recored to we pass the value from body section in json formate of api tester(echo api). 
## delete
to delete any product we pass parameter that the id of the product from URL.
## update(put or patch)
to update any product wev pass id from url and data to udate from body.


## express


7.add folderName/node_modules in .gitignore
8.  npm i express
## send:-> send method ya fun. is used to reword back contaits to the cloent .
## it may be html,json,html file,plan text
## we can also add status code with status fun. it can be change with senf fun. .


## map
this function is used to itrate any array it must return new array

``` 
array.map((item)=>{
    return
})

array.map((item)=>())
```
1.we have to used explicit return fun. whereas not requried in 2th stntax
2.exclutine number of property from any json objects 
const { p1,p2,...rest}=product;
log(rest)

## search
1. to search any item in json array we use find method it will return null or unsaccessful or object on successful
 array.find((item)=>item.id===id);