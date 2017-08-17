
var blogEngine = require('../datas')
// 这种路由应该是3.x前的版本.4.x有专门的express.router（）
module.exports = function (app) {
	app.get('/index',function(req,res) {
		// res.send('Hello')
		res.render('index',{title:"文章列表",entries:blogEngine.getBlogEntries()})

	});
	app.get('/customer',function(req,res) {
		// res.send('customer page')
		res.render('customer',{title:"读者"})
	});
	app.get('/article/:id',function(req,res) {
		// res.send('admin page')
		var entry = blogEngine.getBlogEntry(req.params.id)
		res.render('admin',{title:entry.title,blog:entry})
	});
}