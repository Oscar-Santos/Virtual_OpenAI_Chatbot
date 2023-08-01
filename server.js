// importing open ai node.js confuguration
// import { Configuration, OpenAIApi } from "openai";

const OpenAI = require('openai');
const { Configuration, OpenAIApi } = OpenAI

//
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()


const app = express()
const port = 3001

// setup of the API call
const configuration = new Configuration({
    organization: "org-eYnp3AUeccZLuh7xaZTNSpCE",
    apiKey: process.env.API_KEY,
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
        prompt: `Pretend you are OpenAI Chatgpt. Answer with similar information:
        
        example 1:
        User: What is the total population on planet earth?.
        OpenAI Chatgpt: "The total population on planet earth is 7.8 billion people.
        
        example 2:
        
        User: "suggest me names for my Indian restaurant."

        OpenAI ChatGPT: "Sure! Naming your Indian restaurant can set the tone and create a lasting impression on your customers. Here are some name suggestions for your Indian restaurant:

        1) Spice Junction.

        2) Tandoori Tales.

        3) Curry Paradise.

        4) Saffron Delight.

        5) Masala Magic.

        6) Bollywood Bites.

        7) Chaat Corner.

        8) Naan & Nirvana.

        9) Flavors of India.

        10) Garam Masala Grill.

        11) Chai Chokha.

        12) Dosa Delights.

        13) Namaste Kitchen.

        14) Roti Rolls & Rice.

        15) Samosa Street.

        Feel free to mix and match words, use variations, or add your own unique touch to create a name that best represents your restaurant's ambiance and cuisine. Best of luck with your Indian restaurant!"

        example 3:

        User: make a brief explanation and add a few examples about the basic arithmetic functions.
        OpenAI ChatGPT:
        Basic arithmetic functions are fundamental mathematical operations used to perform calculations involving numbers. These functions include addition, subtraction, multiplication, and division.

        1) Addition (+): Addition is the process of combining two or more numbers to get their total or sum. It represents the concept of "adding" quantities together. For example:
        - 2 + 3 = 5 (Two plus three equals five)
        - 7 + 4 = 11 (Seven plus four equals eleven)

        2) Subtraction (-): Subtraction is the process of finding the difference between two numbers or taking away one quantity from another. For example:
        - 8 - 5 = 3 (Eight minus five equals three)
        - 12 - 7 = 5 (Twelve minus seven equals five)

        3) Multiplication (×): Multiplication is the process of repeated addition or combining equal groups to find the total. It represents the concept of "times" or "multiplied by." For example:
        - 4 × 3 = 12 (Four times three equals twelve)
        - 5 × 8 = 40 (Five times eight equals forty)

        4) Division (÷): Division is the process of splitting a quantity into equal parts or finding out how many times one number is contained within another. It represents the concept of "divided by." For example:
        - 12 ÷ 3 = 4 (Twelve divided by three equals four)
        - 15 ÷ 5 = 3 (Fifteen divided by five equals three)

        These basic arithmetic functions are building blocks for more complex mathematical calculations and are used extensively in everyday life, from simple calculations to advanced problem-solving in various fields like science, engineering, finance, and more.

        Person: ${message}`,
        max_tokens: 400,
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