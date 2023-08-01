export default function Documentation() {

    return (
        <div className="documentation">
            {/* <h1>Api Documentation </h1>
            
            <h3>Introduction</h3>
            <p>You can interact with the API through HTTP requests from any language, via our official Python bindings, our official Node.js library, or a community-maintained library.

                To install the official Python bindings, run the following command:</p> */}

<body>
    <header>
        <h1>Welcome to OpenAI API Documentation</h1>
    </header>

    <main>
        <section>
            <h2>Introduction</h2>
            <p>
                This documentation provides information on how to use the OpenAI API to access various natural language processing models.
                To get started, you will need an API key, which can be obtained by signing up for an account on the OpenAI website.
            </p>
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
        </section>
    </main>

    <footer>
        <p>&copy; 2023 OpenAI. All rights reserved.</p>
    </footer>
</body>   
        </div>
    )
}

