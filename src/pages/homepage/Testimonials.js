import UserOne from '../../assets/avatars/user-1.png';
import UserTwo from '../../assets/avatars/user-2.png';
import UserThree from '../../assets/avatars/user-3.png';
import UserFour from '../../assets/avatars/user-4.png';

export default function Testimonials() {
    const reviews = [
        {
            name: 'Kaitlyn',
            img: UserOne,
            alt: 'Kaitlyn',
            review: "So yummy! The food here is fantastic and the service was great. My favorite shawarma in the valley!",
        },
        {
            name: 'Shivaya',
            img: UserTwo,
            alt: 'Shivaya',
            review: 'Absolute YUM! Delicious fresh quality ingredients. We were surprised how good it was!',
        },
        {
            name: 'Sri',
            img: UserThree,
            alt: 'Sri',
            review: 'The best amazing lunch special. Really tasty and filling. Definitely try the lunch special.',
        },
        {
            name: 'William',
            img: UserFour,
            alt: 'William',
            review: 'Reasonably priced, good portions, fresh, fast, and includes lots of fresh whole foods. Pretty much the perfect restaurant.',
        },
    ];

    return (
        <section className='testimonials-section'>
            <div className='testimonials-inner'>
                <h2 className='section-title'>What Our Guests Say</h2>
                <ul className='testimonials'>
                    {reviews.map((r) => (
                        <li key={r.name} className='user'>
                            <p className='user-stars'>&#9733;&#9733;&#9733;&#9733;&#9733;</p>
                            <p className='user-review'>{r.review}</p>
                            <div className='user-info'>
                                <img className='user-img' src={r.img} alt={r.alt} />
                                <p className='user-name'>{r.name}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
