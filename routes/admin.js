var express = require('express');
const News = require('../models/news')
var router = express.Router();



router.all('*', (req, res, next) => {

    if (!req.session.admin) {
        res.redirect('login');

        return;
    }
    next();
});


/* GET home page. */
router.get('/', function (req, res) {
    // console.log(req.session.admin)

    const newsData = new News({
        title: 'test ttile',
        description: 'test description'
    });

    newsData.save((err) => {
        console.log(err);
    })


    res.render('admin', { title: 'Admin' });
});

module.exports = router;


