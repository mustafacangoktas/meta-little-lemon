import { Link } from 'react-router-dom';
import Button from '../../components/ui/button/Button';
import CardGallery from '../../components/ui/card/CardGallery';

export default function Highlights() {
    return (
        <section className='highlights-section'>
            <div className='highlights-inner'>
                <div className='highlights-header'>
                    <h2>This Week's Specials</h2>
                    <Link to='/order-online'>
                        <Button color='orderButtonColor' text="Order Online" />
                    </Link>
                </div>
                <CardGallery />
            </div>
        </section>
    );
}
