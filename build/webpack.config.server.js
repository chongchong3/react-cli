const path = require("path");
module.exports = {
    target:'node',//打包内容执行在拿个环境，web  node .etc
    entry:{
        app:path.join(__dirname,'../client/server-entry.js')
    },
    output:{
        filename:'server-entry.js',
        path:path.join(__dirname,"../dist"),
        publicPath:'/public',///public
        libraryTarget:'commonjs2'

    },
    module:{
        rules:[
            {
                enforce:'pre',
                test:/.(js|jsx)$/,
                loader:'eslint-loader',
                exclude:[
                    path.resolve(__dirname,'../node_modules')
                ]
            },
            {
                test:/.jsx$/,
                loader:'babel-loader'
            },
            {
                test:/.js$/,
                loader:'babel-loader',
                exclude:[
                    path.join(__dirname,'../node_modules')
                ]
            }
        ]
    }
}