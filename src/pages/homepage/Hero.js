import { Link } from 'react-router-dom';

import HeroImage from '../../assets/food/hero-food.jpg';
import Button from '../../components/ui/button/Button';

const Hero = () => {
    return (
        <section className='hero-section'>
            <div className='hero-inner'>
                <div className='hero-content'>
                    <h2 className='hero-title'>Little Lemon</h2>
                    <p className='hero-location'>Chicago</p>
                    <p className='hero-descr'>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <Link to='/reservation'>
                        <Button color='ctaButtonColor' text='Reserve a Table' />
                    </Link>
                </div>
                <div className='hero-media'>
                    <img className='hero-image' src={HeroImage} alt='Delicious food from Little Lemon restaurant' />
                </div>
            </div>
        </section>
    );
};

export default Hero;
