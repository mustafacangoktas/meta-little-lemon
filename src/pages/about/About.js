import { Link } from 'react-router-dom';
import Storefront from '../../assets/restaurant/storefront.png';
import DiningIn from '../../assets/restaurant/dining-in.png';
import './about.css';

function About() {
    return (
        <main className='about-page'>
            {/* Hero banner */}
            <section className='about-hero' aria-label='About Little Lemon'>
                <div className='container about-hero-inner'>
                    <h1>Our Story</h1>
                    <p>A family recipe, a dream, and a city that became home.</p>
                </div>
            </section>

            {/* Origin story */}
            <section className='about-section container'>
                <div className='about-grid'>
                    <div className='about-text'>
                        <h2>Little Lemon</h2>
                        <p>
                            Little Lemon is a charming neighbourhood bistro that serves simple food and
                            classic cocktails in a lively but casual environment. The restaurant features a
                            locally-sourced menu with daily specials.
                        </p>
                        <p>
                            Founded in Chicago in 2005 by brothers Mario and Adrian, Little Lemon
                            started as a single-room Mediterranean kitchen. The brothers grew up cooking
                            alongside their grandmother in Thessaloniki, Greece, learning that great food
                            is made with patience and care — not shortcuts.
                        </p>
                        <p>
                            Today the restaurant is beloved by locals and food critics alike for its
                            warm hospitality, honest flavours, and commitment to fresh, seasonal
                            ingredients.
                        </p>
                        <Link to='/reservation' className='btn ctaButtonColor about-cta'>
                            Reserve a Table
                        </Link>
                    </div>
                    <div className='about-images'>
                        <img src={Storefront} alt='Little Lemon restaurant exterior on a sunny day' />
                        <img src={DiningIn} alt='Guests dining inside Little Lemon restaurant' />
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className='about-values container' aria-label='Our values'>
                <h2>What We Stand For</h2>
                <ul className='values-grid'>
                    <li>
                        <h3>Fresh &amp; Local</h3>
                        <p>We work with local farmers every week to source seasonal ingredients at their peak.</p>
                    </li>
                    <li>
                        <h3>Family Recipes</h3>
                        <p>Every dish carries decades of tradition passed down through the Benitez family.</p>
                    </li>
                    <li>
                        <h3>Warm Hospitality</h3>
                        <p>We believe a great meal starts long before the food arrives — it begins the moment you walk in.</p>
                    </li>
                </ul>
            </section>
        </main>
    );
}

export default About;

