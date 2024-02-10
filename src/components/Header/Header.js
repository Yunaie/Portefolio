import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <ul>
                <li>
                    <Link to="/" className='active'>Home</Link>
                </li>
                <li>
                    <Link to="/contacts">Contacts</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/work">Work</Link>
                </li>
            </ul>
        </header>
    );
}

export default Header;
