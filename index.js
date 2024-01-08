const express = require('express');

const app = express();

const PORT = 4500;

app.listen(PORT, () =>{
   console.log(`API listening on port ${PORT}`);
});

app.get('/', (req, res) =>{
   res.send('Hey this is my api running....... on port 4500 host again 2nd time ------------------ olny git push ');
});

module.export = app;


