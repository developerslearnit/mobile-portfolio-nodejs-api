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
          }

     }