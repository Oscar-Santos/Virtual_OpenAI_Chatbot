import { Link } from 'react-router-dom';

export default function Nav(props) {
    return (
        <div className="nav">
 
            <Link to="/about">
                <div>About </div>
            </Link>

            <Link to="/chatbox">
                <div>Chatbot Page</div>
            </Link>

            <Link to="/documentation">
                <div>OpenAI API Documentation </div>
            </Link>

        </div>
    )
}