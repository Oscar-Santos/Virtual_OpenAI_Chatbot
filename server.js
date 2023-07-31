// importing open ai node.js confuguration
// import { Configuration, OpenAIApi } from "openai";

const OpenAI = require('openai');
const { Configuration, OpenAIApi } = OpenAI

//
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')


const app = express()
const port = 3001

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

    const { message } = req.body; // creating the message for the prompt
    // model completion from opean ai documentation (model davinci)
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${message}`,
        max_tokens: 150,
        temperature: 0,
      });
      console.log(response.data);
      // now parsing the exact nested response from opeanai to the FE
      if (response.data) {
        if (response.data.choices) {
            res.json({
                message: response.data.choices[0].text
            })
        }
      }

})
// listening on port 3000
app.listen(port, () =>{
    console.log("example app listening on port", port)
})