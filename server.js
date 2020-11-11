const express = require('express');
const morgan = require('morgan');
const app = express();
const UserRouter = require('./UserRouter');

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use(morgan('dev'))

app.get('/etudiant', (req,res) => {
    res.status(200)
    return res.json({"message":"asma"})
})

app.get('/enseignant', (req,res) => {
    res.status(200)
    return res.json({"message":"karim"})
})

app.get('/secrets', (req,res) => {
    res.status(400)
    return res.json({"message":"accés no autorisé"})
})





//Router 
app.use('/user' ,UserRouter);








app.listen(port, () => {console.log("server is running on "+port)})