const express = require('express');
const ejs = require('ejs');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));




app.get('/', (req, res) => {
    res.render('index');
});

let formData = [
    {
        name:"Taran Mittal",
        phone:"7696343817",
        email:"taranmittal.1717@gmail.com"
    },
    {
        name:"Sharan Mittal",
        phone:"8696343817",
        email:"sharanmittal.1717@gmail.com"
    },
    {
        name:"Karan Mittal",
        phone:"9696343817",
        email:"karanmittal.1717@gmail.com"
    }
];
app.post('/submit', (req, res) => {
    formData.push(req.body);
    res.redirect('./form-data');
});

app.get('/form-data', (req, res) => {
    res.render('form-data', { formData });
});

app.delete('/form-data/:phone', (req, res) => {
    const phone = req.params.phone;
    const index = formData.findIndex(item  => item.phone === phone);
    if (index > -1) {
      formData.splice(index, 1);
    }
    res.redirect('/form-data');
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
  });


module.exports = app;