const express = require("express")
const ReactSSR = require('react-dom/server')
const fs = require("fs")
const path = require("path")


const isDev = process.env.NODE_ENV === "development"


const app = express();

// console.log(serverEntry)





if(!isDev){
    const serverEntry = require("../dist/server-entry").default
    const tempate = fs.readFileSync(path.join(__dirname,"../dist/index.html"),'utf8')
    app.use('/public',express.static(path.join(__dirname,'../dist')))

    app.get('*',function(req,res){
        const  appString =ReactSSR.renderToString(serverEntry);

        res.send(tempate.replace('<!-- app -->',appString))
    })
}else{
    const devStatic = require('./util/dev.static')
    devStatic(app)
}

app.listen("3333",function(){
    console.log("Server is listening on 3333")
})