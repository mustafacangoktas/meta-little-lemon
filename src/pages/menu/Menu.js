import { useState } from 'react';
import './menu.css';

import GreekSalad from '../../assets/food/greek-salad.jpg';
import LemonDessert from '../../assets/food/lemon-dessert.jpg';
import ChefSpecial from '../../assets/food/chef-special.jpg';
import RestaurantFood from '../../assets/food/hero-food.jpg';
import Bruschetta from '../../assets/food/bruschetta.jpg';

const menuData = {
    starters: [
        {
            name: 'Greek Salad',
            price: '$12.99',
            description: 'The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
            image: GreekSalad,
            tag: 'Vegetarian',
        },
        {
            name: 'Bruschetta',
            price: '$7.99',
            description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with fresh tomatoes and basil.',
            image: Bruschetta,
            tag: 'Vegan',
        },
        {
            name: 'Lemon Hummus',
            price: '$8.99',
            description: 'Our fresh hummus is made with chickpeas, lemon, tahini and a touch of garlic. Served with warm pita bread and a drizzle of olive oil.',
            image: RestaurantFood,
            tag: 'Vegan',
        },
    ],
    mains: [
        {
            name: 'Meat Loaf Gyros',
            price: '$18.99',
            description: 'A different gyro meat recipe, yet so good! Served in warm pita with tzatziki, tomatoes, onions and fresh herbs. Delivery available.',
            image: ChefSpecial,
            tag: 'Delivery Available',
            tagClass: 'menu-item-tag--delivery',
        },
        {
            name: 'Grilled Sea Bass',
            price: '$22.99',
            description: 'Fresh sea bass grilled to perfection with lemon butter sauce, capers and Mediterranean herbs. Served with roasted seasonal vegetables.',
            image: GreekSalad,
            tag: 'Chef\'s Pick',
        },
        {
            name: 'Chicken Souvlaki',
            price: '$16.99',
            description: 'Tender marinated chicken skewers grilled over charcoal. Served with rice pilaf, Greek salad and warm pita bread.',
            image: RestaurantFood,
            tag: 'Delivery Available',
            tagClass: 'menu-item-tag--delivery',
        },
    ],
    desserts: [
        {
            name: 'Lemon Dessert',
            price: '$8.99',
            description: 'This cake is not your typical sugary treat. It has a lovely sweet and tart flavour balance. Topped with sweet lemon glaze for an extra layer of flavour.',
            image: LemonDessert,
            tag: 'House Favourite',
        },
        {
            name: 'Baklava',
            price: '$6.99',
            description: 'Classic Turkish baklava made with layers of flaky phyllo dough, filled with chopped walnuts and sweetened with honey syrup.',
            image: Bruschetta,
            tag: 'Vegetarian',
        },
        {
            name: 'Greek Yogurt Parfait',
            price: '$7.99',
            description: 'Creamy Greek yogurt layered with local honey, fresh seasonal berries and crunchy house-made granola. Light and refreshing.',
            image: RestaurantFood,
            tag: 'Vegetarian',
        },
    ],
    drinks: [
        {
            name: 'Lemon Mint Lemonade',
            price: '$4.99',
            description: 'Freshly squeezed lemon juice with a hint of mint, sweetened just right. Our signature non-alcoholic refreshment.',
            image: Bruschetta,
            tag: 'Non-Alcoholic',
        },
        {
            name: 'House Red Wine',
            price: '$9.99',
            description: 'A smooth, full-bodied red wine sourced from a family vineyard in Tuscany. Notes of cherry, vanilla and a hint of oak.',
            image: RestaurantFood,
            tag: 'Alcoholic',
        },
        {
            name: 'Turkish Coffee',
            price: '$3.99',
            description: 'Traditionally prepared finely ground coffee, served in a copper cezve with Turkish delight on the side.',
            image: ChefSpecial,
            tag: 'Hot',
        },
    ],
};

const categories = [
    { key: 'starters', label: 'Starters' },
    { key: 'mains',    label: 'Main Dishes' },
    { key: 'desserts', label: 'Desserts' },
    { key: 'drinks',   label: 'Drinks' },
];

function Menu() {
    const [activeCategory, setActiveCategory] = useState('starters');
    const items = menuData[activeCategory];
    const categoryLabel = categories.find(c => c.key === activeCategory)?.label;

    return (
        <main className='menu-page'>
            <section className='menu-hero'>
                <h1>Our Menu</h1>
                <p>Explore our carefully crafted Mediterranean dishes made with fresh, locally sourced ingredients.</p>
            </section>

            <nav className='menu-tabs' aria-label='Menu categories'>
                <div className='menu-tabs-inner'>
                    {categories.map((cat) => (
                        <button
                            key={cat.key}
                            className={`menu-tab-btn${activeCategory === cat.key ? ' active' : ''}`}
                            onClick={() => setActiveCategory(cat.key)}
                            aria-current={activeCategory === cat.key ? 'true' : undefined}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>
            </nav>

            <div className='menu-content'>
                <h2 className='menu-category-title'>{categoryLabel}</h2>
                <ul className='menu-grid'>
                    {items.map((item) => (
                        <li key={item.name} className='menu-item'>
                            <img
                                className='menu-item-img'
                                src={item.image}
                                alt={item.name}
                            />
                            <div className='menu-item-body'>
                                <div className='menu-item-header'>
                                    <h3 className='menu-item-name'>{item.name}</h3>
                                    <p className='menu-item-price'>{item.price}</p>
                                </div>
                                <p className='menu-item-desc'>{item.description}</p>
                                <span className={`menu-item-tag ${item.tagClass || ''}`}>
                                    {item.tag}
                                </span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
}

export default Menu;