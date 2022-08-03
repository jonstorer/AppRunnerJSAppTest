const app = require('express')();
app.get('*', function (req, res) { res.send('ok'); });
app.listen('3040');
