import Logo from '../../assets/Logo.svg';
import './header.css';
import { Link } from 'react-router-dom';
import { NavDesktop } from './NavDesktop';
import { NavMobile } from './NavMobile';

function Header() {
    return (
        <header className='header-container'>
            <div>
                <Link to='/'>
                    <span className='sr-only'>Little Lemon Homepage</span>
                    <img className='logo' src={Logo} alt='Little Lemon logo' />
                </Link>
            </div>
            <nav aria-label='Main navigation'>
                <NavMobile />
                <NavDesktop />
            </nav>
        </header>
    );
}

export default Header;
