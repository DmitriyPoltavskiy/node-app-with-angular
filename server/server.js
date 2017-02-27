var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('hello world');
  // console.log('req: ', req);
  // console.log('res: ', res);
});

app.listen(3000);
console.log('server is up runnig');