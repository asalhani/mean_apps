const express = require('express');

const app = express();
const _port = "3000";

app.get('/', (req, res) =>{
    res.send('respnse is working');
});

app.listen(_port, () =>{
    console.log(`Server is running on 111: ${_port}` );
});
