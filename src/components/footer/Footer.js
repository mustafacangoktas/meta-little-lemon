import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.svg';

import './footer.css';

const Footer = () => {
    return (
        <footer className='footer-section'>
            <div className='footer-inner'>
                <div className='footer-grid'>
                    <section className='footer-brand'>
                        <img className='footer-logo' src={Logo} alt='Little Lemon logo' />
                        <p>A family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    </section>
                    <section>
                        <h3 className='footer-titles'>Navigation</h3>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/menu'>Menu</Link></li>
                            <li><Link to='/reservation'>Reservation</Link></li>
                            <li><Link to='/order-online'>Order Online</Link></li>
                            <li><Link to='/login'>Login</Link></li>
                        </ul>
                    </section>
                    <section>
                        <h3 className='footer-titles'>Contact</h3>
                        <address>
                            <a href="mailto:info@littlelemon.com">info@littlelemon.com</a>
                            <a href="tel:+14800000000">(480) 000-0000</a>
                            <span>1234 N Mediterranean Ave,<br />Chicago, IL 60601</span>
                        </address>
                    </section>
                    <section>
                        <h3 className='footer-titles'>Follow Us</h3>
                        <ul className='social-links'>
                            <li>
                                <a href='https://www.facebook.com' aria-label='Facebook'>
                                    <FaFacebookSquare aria-hidden='true' />
                                </a>
                            </li>
                            <li>
                                <a href='https://www.twitter.com' aria-label='Twitter'>
                                    <FaTwitterSquare aria-hidden='true' />
                                </a>
                            </li>
                            <li>
                                <a href='https://www.instagram.com' aria-label='Instagram'>
                                    <FaInstagramSquare aria-hidden='true' />
                                </a>
                            </li>
                        </ul>
                    </section>
                </div>
                <div className='footer-bottom'>
                    <p>&copy; {new Date().getFullYear()} Little Lemon. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
