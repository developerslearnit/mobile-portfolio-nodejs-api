var Portfolio = require('../interfaces/portfolio'),
     config = require('../configuration/app.config'),
     cloudinary = require('cloudinary'),
     multipart = require('connect-multiparty')();

cloudinary.config({
     cloud_name: config.cloud_name,
     api_key: config.api_key,
     api_secret: config.api_secret
});

module.exports = {

     add: (req, res, next) => {

          cloudinary.uploader.upload(req.files.file.path, (resp) => {

               var portfolio = new Portfolio({
                    author: req.body.author_id,
                    category: req.body.category_id,
                    title: req.body.title,
                    image_url: resp.url,
                    description: req.body.description,
                    web_url: req.body.web_url
               }).save((err, response) => {
                    if (err) {
                         res.status(400).json({ status: 0, message: JSON.stringify(err) });
                    } else {
                         res.status(201).json({
                              status: 1,
                              message: 'Portfolio has been created successfully',
                              data: response
                         });
                    }
               });

          });
     },
     getAll: (req, res, next) => {
          Portfolio.find({}, 'category title image_url description web_url')
               .populate('author', 'firstName lastName avatar_url role')
               .sort('-created_at')
               .exec(function (err, result) {
                    if (err) return next(err);
                    res.status(httpCodes.OK).json({ status: 1, message: null, count: result.length, data: result });
                })
     },
     get: (req, res, next) => {

     }



}