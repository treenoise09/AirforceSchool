const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const register = require('./routes/register');
const login = require('./routes/login')
const app = express();
const port = 3000;

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(fileUpload());
app.use('/register', register);
app.use('/login',login)

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});