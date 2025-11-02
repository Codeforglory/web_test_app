const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const express = require('express')
const process = require('process')

app = express()

const PORT = process.env.PORT
const JWT_SECRET = process.env.JWT_SECRET

//const user = {id : }

app.get('/test',(req,res) =>{

    res.send("Test successful");

})
/*
const authenticateToken = (req,res,next) => {
    const authHeader = req.headers['Authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if(token == null) return res.status(401).json({message : "Invalid credentials"});

    jwt.verify(token,);


};
*/

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});