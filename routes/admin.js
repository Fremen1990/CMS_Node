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
    // const newsData = new News({
    //     title: 'test ttile',
    //     description: 'test description'
    // });

    // newsData.save((err) => {
    //     console.log(err);
    // })
    res.render('admin/index', { title: 'Admin' });
});


router.get('/news/add', (req, res) => {

    res.render('admin/news-form', { title: 'Add news' });
})

router.post('/news/add', (req, res) => {
    const body = req.body;

    const newsData = new News(body);
    const ery = newsData.validateSync();

    newsData.save((err) => {
        console.log(err);
    })

    res.render('admin/news-form', { title: 'Add news', ery });
})

module.exports = router;


