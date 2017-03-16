const compression = require('compression');
const express = require('express');

const app = express();
const port = process.env.PORT || 8080;
app.use(compression());

app.use(express.static('./build'));

app.listen(port, (err => {
  if(err){
    console.log(err);
    return; 
  }
  console.log(`Server is running on http://localhost:${port}`);
}));

