var express = require('express');
var router = express.Router();

router.get('/tasks', function(req, res, next){
    res.send("Tasks api worked");
});

module.exports = router;