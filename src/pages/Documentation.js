import Image10 from '../images/shot_1.png';
import Image12 from '../images/shot_3.png';
import Image14 from '../images/shot_4.png';
import Image15 from '../images/shot_5.png';
import Image20 from '../images/shot_20.png';
export default function Documentation() {

    return (
        <div className="documentation">

<body>
    <header>
        <h1>Welcome to OpenAI API Documentation</h1>
    </header>

    <main>
        <section>
        <img src={Image20} width="800px"alt="" />
        </section>

        <section>
            <h2>API Endpoints</h2>
            <p>
                The OpenAI API provides the following endpoints:
                <ul>
                    <li><code>/completions</code>: Used for text generation and completion tasks.</li>
                    <li><code>/classifications</code>: Used for text classification tasks.</li>
                    <li><code>/translations</code>: Used for translation tasks.</li>
                    
                </ul>
            </p>
        </section>

        <section>
            <h2>Authentication</h2>
            <p>
                To authenticate your requests to the OpenAI API, include your API key in the <code>Authorization</code> header of your HTTP request.
                The header should look like this:
            </p>
            <pre><code>Authorization: Bearer YOUR_API_KEY</code></pre>
        </section>

        <section>
            <h2>Request Format</h2>
            <p>
                All API endpoints accept JSON-formatted data in the request body.
                The required parameters and data structure depend on the specific endpoint being used.
                Please refer to the detailed documentation for each endpoint for more information.
            </p>
            <h2>Making Requests</h2>
            <p>
            You can paste the command below into your terminal to run your first API request. Make sure to replace $OPENAI_API_KEY with your secret API key.
            </p>
        </section>
        <br />
        <img src={Image10} width="800px"alt="" />
        <br />

        <img src={Image12} width="800px"alt="" />
        <br />
        <img src={Image14} width="800px"alt="" />
        <br />
        <img src={Image15} width="800px"alt="" />
    </main>

    <footer>
        <p>&copy; 2023 OpenAI. All rights reserved.</p>
    </footer>
</body>   
        </div>
    )
}

