import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav className="navigation">
            <Link className="navigation__logo" to="/">Exercise Tracker</Link>
            <ul className="navigation__list">
                <li className="navigation__list-item">
                    <Link className="navigation__link" to="/">View Exercises</Link>
                </li>
                <li className="navigation__list-item">
                    <Link className="navigation__link" to="/create">Add Exercise</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;