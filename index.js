const express = require('express');
const ejs = require('ejs');
const app = express();
app.set('view engine', 'ejs')
app.use(express.static('public'));

app.get('/', (_req, res) => {
    res.render('index-2.ejs')
})
app.listen(3000, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('listening on port :3000');
    }
})