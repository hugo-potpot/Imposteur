import {Link} from 'react-router-dom';

function Navbar() {
    return (
        <nav className="bg-gray-900 flex justify-between items-center p-4">
            <ul className="flex space-x-4">
                <li className="nav-item">
                    <Link to="/" className="text-white">Imposteur</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
