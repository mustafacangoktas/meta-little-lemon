import './home.css';

import About from './About';
import Hero from './Hero';
import Highlights from './Highlights';
import Testimonials from './Testimonials';

function Main() {
    return (
        <main className="home-page">
            <Hero />
            <Highlights />
            <Testimonials />
            <About />
        </main>
    );
}

export default Main;
