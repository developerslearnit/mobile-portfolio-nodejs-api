var User = require('../interfaces/user');

module.exports = {

     register: (req, res, next) => {

          var user = new User({

               email: req.body.email,
               password: req.body.password,
               firstName: req.body.firstName,
               lastName: req.body.lastName,
               phone: req.body.phone,
               role:req.body.role,
               avatar_url:req.body.avatar_url

          }).save((err, response) => {
               if (err) {
                    res.status(400).json({ status: 0, message: JSON.stringify(err) });
               } else {
                    res.status(201).json({
                         status: 1,
                         message: 'User has been created successfully',
                         data: response
                    });
               }
          });
     },

     update: (req, res, next) =>{
          User.findByIdAndUpdate({ _id: req.params.id }, (err, res, next)=> {
               if (err) return next(err);
          });
     },
     login:  (req, res, next) => {
          User.findOne({ email: req.body.email },  (err, result)=> {
               if (err) return next(err);
               res.status(200).json({ status: 1, message: null, count: result.length, data: result });
          });
     },
     get: (req, res, next)=> {
          User.find({}, (err, result)=> {
               if (err) return next(err);
               res.status(200).json({ status: 1, message: null, count: result.length, data: result });
          });
     },
     delete: (req, res, next)=> {
          User.find({}).remove().exec( (err, result) => {
               res.json({ result });
          })
     }



}