var express = require('express');
var router = express.Router();
const formidable = require('formidable');
 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/upload', (req, res)=>{
  const form = formidable({ multiples: true, uploadDir: './upload',  keepExtensions: true});
  // let form = new formidable.IncomingForm({
  //   uploadDir: './upload',
  //   keepExtensions: true
  // });
console.log('1');
  form.parse(req, (err, fields, files)=>{
    console.log('2');
    res.json({
      files
    });
  });
});

module.exports = router;
