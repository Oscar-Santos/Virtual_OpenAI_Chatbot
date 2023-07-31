import { Link } from 'react-router-dom';

export default function Nav(props) {
    return (
        <div className="nav">
 
            <Link to="/about">
                <div>About Page</div>
            </Link>

            <Link to="/chatbox">
                <div>Chatbox Page</div>
            </Link>

            <Link to="/documentation">
                <div>Documentation Page</div>
            </Link>

        </div>
    )
}