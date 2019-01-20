const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// 静态文件
app.use(express.static(path.resolve(__dirname, '../dist')))
app.get('*', function(req, res) {
    const html = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf-8')
    res.send(html)
})

//允许跨域访问
app.all('*',function (req, res, next) {
	console.log(req,res)
	res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// 监听80端口
app.listen(8081);
console.log('server is running 8081');