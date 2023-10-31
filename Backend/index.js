const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const register = require('./routes/register');
const login = require('./routes/login')
const app = express();
const port = 3001;

var corsOptions = {
    origin: 'http://localhost:8080',
    optionsSuccessStatus: 200 
  }
app.use(cors(corsOptions))
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use('/register', register);
app.use('/login',login)

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});