var userCtrl = require('../controllers/user.controller'),
	catCtrl = require('../controllers/category.controller'),
	portfolioCtrl =require('../controllers/portfolio.controller');
var multipart = require('connect-multiparty')();

module.exports = function (express, app) {

	var router = express.Router();

	router.get('/', function (req, res) {
		res.json("API Home Page");
	})

	//Users API Routes
	router.post('/api/v1/users', multipart, userCtrl.register);
	router.get('/api/v1/users', userCtrl.get);
	router.post('/api/v1/categories',catCtrl.add);
	router.get('/api/v1/categories',catCtrl.get);

	router.post('/api/v1/portfolios',portfolioCtrl.add);
	app.use('/', router);

}