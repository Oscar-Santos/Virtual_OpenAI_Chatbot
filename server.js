const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')


const app = express()
const port = 3000



app.get('/',(req, res) => {
    res.send("hello world")
})

app.listen(port, () =>{
    console.log("listening on port 3000")
})