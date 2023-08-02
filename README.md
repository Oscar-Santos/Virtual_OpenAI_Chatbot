![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)
# VIRTUAL OPENAI CHATBOT APP

## Overview 🟣
Virtual OpenAI ChatBot App is a small, yet complete full-stack application. For this app, I utilized various technologies such as React, React libraries, React Dependencies, CSS, Node packages, and a Node.js server with the Express framework to create a web server.

The highlight of this application is an interactive chatbot that leverages the powerful "Text-DaVinci-oo3" model from OpenAI. Through API calls, the chatbot engages in conversations with users, simulating interactions with a real person. To ensure security, I have implemented the Dotenv module to load environment variables and conceal my API key, as OpenAI prioritizes data protection.

You can ask this Chatbot any question, such as name suggestions, logo designs, or even an "about us" story for any type of business. It provides prompt-based responses, generating creative and relevant suggestions based on the input. Additionally.

Developing this application has been exciting but also challenging. I thoroughly enjoyed working on it and overcoming the various complexities that arose along the way.

![Screen Shot 2023-08-01 at 7 57 57 PM](https://github.com/Oscar-Santos/Virtual_OpenAI_Chatbot/assets/83252572/4b9993a2-935a-48b4-893b-a8e51a1b89a2)


## To set up this app locally, please follow these steps:🟣

- Clone this repository using `git clone`. 
- Navigate to the root directory by running `cd Virtual_OpenAI_Chatbot `.
- Open one terminal for the `Virtual_OpenAI_Chatbot `.
- In the terminal, run `npm run dev`.
- After running 'npm run dev', if you encounter this error:

![Screen Shot 2023-07-06 at 10 17 57 AM](https://github.com/Oscar-Santos/brandCraftPro_robotApp/assets/83252572/1240aa47-1251-4179-a3db-3f0cd00a6c06)

- Then ensure that you have Node.js and npm (Node Package Manager) installed on your system. You can check this by running the following commands in your terminal or command prompt:
  </br>
  `node -v`
  </br>
  `npm -v`

- If these commands return the version numbers, it means Node.js and npm are installed. If not, you will need to install them from the official Node.js website [Node](https://nodejs.org).
  
- After this, run the following command in your terminal `npm install`
- Then, run the following command in your terminal `npm i -D concurrently` :
- Once this installation is complete, run `npm run dev` in your terminal.
- Then you would have the App running from the Front-End, and from the Back-End, and ready to use it.
- However if you ask a question to the chatbot and the terminal gives you this error:

  ![Screen Shot 2023-07-06 at 1 30 02 PM](https://github.com/Oscar-Santos/brandCraftPro_robotApp/assets/83252572/332c93f7-9d11-4d66-b90e-8c1d8411a467)

- Then, it means that you need to obtain an API key from OpenAI. Don't worry, getting one for free is easy.

## Obtaining an API key from OpenAI Chatgpt:🟣

- To log in to your OpenAI account, please visit the [OpenAI site](https://openai.com/blog/chatgpt), If you don't have an account, you will need to create one.
- Once you login, go to `API`
- Go to `Personal` and click on `View API Keys`
- Then click on `+ Create new secret key`
- Now, copy your `API key` and your `Organization Key`

## Once you have obtained your OpenAI API key:🟣

- Please return to the App and open your preferred editor (e.g., `VS Code`, `Atom`, etc.) from the Virtual_OpenAI_Chatbot directory.
- Open the `server.js` file.
- And paste your `OpenAI API key` and your `Organization key` into this line of code:

![Screen Shot 2023-07-06 at 3 57 00 PM](https://github.com/Oscar-Santos/brandCraftPro_robotApp/assets/83252572/ad7b0df5-b6e4-42c9-8d08-d13a54449be0)


- Save the file, and now, once again, run `npm run dev` in your terminal.
- Now the App should be up and running!! Feel free to ask any question to the App and see how it responds!!

  
## Framework🟣
<p>
  <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB" />
</p>

## Languages🟣
<p>
  <img src="https://img.shields.io/badge/JavaScript-ES2021-yellow?logo=javascript" />
  </br>
  <img src="https://img.shields.io/badge/CSS-3-blue?logo=css3" />
  </br>
  <img src="https://img.shields.io/badge/HTML-<VERSION>-<COLOR>?logo=html5" />
  </br>
</p>

## Tools🟣
<p>
  <img src="https://img.shields.io/badge/OpenAI-Integrated-brightgreen?logo=openai" /> 
  </br>
  <img src="https://img.shields.io/badge/Node.js-14.17.3-green?logo=node.js" /> 
  </br>
  <img src="https://img.shields.io/badge/Git-F05032.svg?&style=flaste&logo=git&logoColor=white" />
  </br>
  <img src="https://img.shields.io/badge/GitHub-181717.svg?&style=flaste&logo=github&logoColor=white" />
  </br>
</p>

## Endpoints🟣

1)   #### Request
`POST https://api.openai.com/v1/completions`
```json
{
  "model": "text-davinci-003",
  "prompt": "Say this is a test",
  "max_tokens": 7,
  "temperature": 0,
  "top_p": 1,
  "n": 1,
  "stream": false,
  "logprobs": null,
  "stop": "\n"
}

```

2)    #### Response
`POST https://api.openai.com/v1/completions`

```json
{
  "id": "cmpl-uqkvlQyYK7bGYrRHQ0eXlWi7",
  "object": "text_completion",
  "created": 1589478378,
  "model": "text-davinci-003",
  "choices": [
    {
      "text": "\n\nThis is indeed a test",
      "index": 0,
      "logprobs": null,
      "finish_reason": "length"
    }
  ],
  "usage": {
    "prompt_tokens": 5,
    "completion_tokens": 7,
    "total_tokens": 12
  }
}

```


## App Link🟣

[React App Link](https://brand-craft-pro-robot-app.vercel.app/)


![-----------------------------------------------------](https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png)



