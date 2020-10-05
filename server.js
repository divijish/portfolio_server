const express = require('express');
const path = require('path');
const app = express();

const httpPort = 80;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, resp)=>{
    resp.sendFile(path.join(__dirname, 'public/index.html'));
})

app.listen(httpPort, function(){
    console.log(`Listening on port ${httpPort}`);
})