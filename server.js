const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')


const app = express()
const port = 3000



app.post('/',(req, res) => {
    res.json({ message: "Hello  crazy World!" })
})

app.listen(port, () =>{
    console.log("listening on port 3000")
})