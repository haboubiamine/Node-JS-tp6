const express = require('express');

const router = express.Router();

const users = [];

var id = 1 ;


router.get('/', (req,res)=> {
    return res.json(users);
})

router.get('/:id', (req,res) =>{
    const user = users.find(val => val.id === Number(req.params.id))
    return res.json(user);
})

router.post('/new',(req,res)=> {
    users.push({
        "name": req.body.name,
        "id":id++
    })
    res.send('user added');
})

router.patch('/:id', (req,res) =>{
    const user = users.find(val => val.id === Number(req.params.id))
    user.name = req.body.name;
    res.send("user updated")
})

router.delete('/:id', (req,res) =>{
    const userindex = users.findIndex(val => val.id === Number(req.params.id))
    users.splice(userindex,1)
    res.send("user deleted")
})






module.exports = router;