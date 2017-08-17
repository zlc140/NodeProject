var express = require('express');
var router= express.Router();
var bodyParser = require('body-parser')
var app = express();
app.use(bodyParser())
// app.use(express.static(__dirname+'/public'))//打开项目子目录的public下的index.html

// app.get('/',function(req,res) {//输出hello world
// 	res.send('Hello world')
// })
var hbs = require('hbs')//Handlebars模板引擎
// // 指定模板文件后缀为html
app.set('view engine','html')
app.engine('html',hbs.__express)

// var routes = require('./routes')(app)//这是把路由提取出来
var blogEngine = require('./datas')

// 4.x有专门的express.router（）
router.get('/index',function(req,res) {
	// res.send('Hello')
	res.render('index',{title:"文章列表",entries:blogEngine.getBlogEntries()})

});
router.get('/customer',function(req,res) {
	// res.send('customer page')
	res.render('customer',{title:"读者"})
});
router.get('/article/:id',function(req,res) {
	// res.send('admin page')
	var entry = blogEngine.getBlogEntry(req.params.id)
	res.render('admin',{title:entry.title,blog:entry})
});


app.use('/',router)
app.listen(3003)