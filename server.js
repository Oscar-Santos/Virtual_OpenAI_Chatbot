// importing open ai node.js confuguration
// import { Configuration, OpenAIApi } from "openai";

const OpenAI = require('openai');
const { Configuration, OpenAIApi } = OpenAI

//
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')


const app = express()
const port = 3000

// setup of the API call
const configuration = new Configuration({
    organization: "org-eYnp3AUeccZLuh7xaZTNSpCE",
    apiKey: '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',
});
const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();
//

app.post('/',(req, res) => {
    res.json({ message: "Hello  crazy World!" })
})

app.listen(port, () =>{
    console.log("listening on port 3000")
})