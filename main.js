const fs =require('fs');
const http=require('http')

const server =http.createServer(function (req,res) {
    if(req.url=="/" || req.url=="/home"){
        fs.readFile('./public/home.html',function (err, data) {
            if(err){
                res.writeHead(404,{'Content-type': 'text/html'})
                res.write("File Not Found")
                res.end()
            }else{
                res.writeHead(200,{'Content-type': 'text/html'})
                res.write(data)
                res.end()
            }
        })

    }else if(req.url=="/about"){
        fs.readFile('./public/about.html',function (err, data) {
            if(err){
                res.writeHead(404,{'Content-type': 'text/html'})
                res.write("File Not Found")
                res.end()
            }else{
                res.writeHead(200,{'Content-type': 'text/html'})
                res.write(data)
                res.end()
            }
        })
    }
    else if(req.url=="/contact"){
        fs.readFile('./public/contact.html',function (err, data) {
            if(err){
                res.writeHead(404,{'Content-type': 'text/html'})
                res.write("File Not Found")
                res.end()
            }else{
                res.writeHead(200,{'Content-type': 'text/html'})
                res.write(data)
                res.end()
            }
        })
    }else{
        const myData=fs.readFileSync('./public/404.html')
        res.writeHead(404,{'Content-type': 'text/html'})
        res.write(myData)
        res.end()
    }
})
server.listen(3000)
console.log("server Run Successfully")
