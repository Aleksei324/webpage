import './Panel.css';
import { Link } from 'react-router-dom';

function Panel(){
    return (
        <header className="Panel">
            <nav>
                <Link to='/' className='navLink'>Main&nbsp;page</Link>
                <Link to='/some-projects' className='navLink'>Some&nbsp;projects</Link>
                <Link to='/minigame' className='navLink'>Minigame</Link>
            </nav>
        </header>
    );
}

export default Panel;