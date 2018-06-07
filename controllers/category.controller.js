var Category = require('../interfaces/category'),
     config = require('../configuration/app.config');

     module.exports = {

          add:(req, res, next)=>{
               var category =new Category({
                    title:req.body.title
               }).save((err, response) => {
                    if (err) {
                         res.status(400).json({ status: 0, message: JSON.stringify(err) });
                    } else {
                         res.status(201).json({
                              status: 1,
                              message: 'Category has been created successfully',
                              data: response
                         });
                    }
               });
          },

          get:(req,res,next)=>{
               Category.find({}, (err, result)=> {
                    if (err) return next(err);
                    res.status(200).json({ status: 1, message: null, count: result.length, data: result });
               });
          }

     }