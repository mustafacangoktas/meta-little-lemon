import PictureOne from '../../assets/restaurant/storefront.png';
import PictureTwo from '../../assets/restaurant/dining-in.png';

export default function About() {
    return (
        <section className='about-section'>
            <div className='about-inner'>
                <div className='about-info'>
                    <h2 className='about-title'>Little Lemon Story</h2>
                    <p className='hero-location'>Chicago</p>
                    <p className='hero-descr'>Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant. To craft the menu, Mario relies on family recipes and his experience as a chef in Italy.</p>
                </div>
                <div className='about-images'>
                    <img src={PictureOne} alt='Our first location in Chicago.' />
                    <img src={PictureTwo} alt='A woman enjoying our dine-in experience.' />
                </div>
            </div>
        </section>
    );
}
