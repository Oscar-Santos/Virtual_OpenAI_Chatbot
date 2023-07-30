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

//
app.use(bodyParser.json());
app.use(cors());

app.post('/', async (req, res) => {
    // res.json({ message: "Hello  crazy World!" })
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "Say this is a test",
        max_tokens: 7,
        temperature: 0,
      });
      console.log(response.data);
      res.json({
        message: "hello worlddddd"
    })
})

app.listen(port, () =>{
    console.log("example app listening on port", port)
})