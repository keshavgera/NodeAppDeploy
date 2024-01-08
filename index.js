const express = require('express');

const app = express();

const PORT = 4500;

app.listen(PORT, () =>{
   console.log(`API listening on port ${PORT}`);
});

app.get('/', (req, res) =>{
   res.send('Hey this is my api running....... on port 4500 host only one time in vercel and 2nd time automatically detect push in git and update vercel auto ');
});

module.export = app;


