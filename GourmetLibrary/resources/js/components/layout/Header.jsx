import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <nav className="header">
            <h1>GourmetLibrary</h1>
            <ul>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/books">Livres</Link></li>
            </ul>
        </nav>
    );
}