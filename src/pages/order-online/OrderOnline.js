import { useState } from 'react';
import GreekSalad from '../../assets/food/greek-salad.jpg';
import LemonDessert from '../../assets/food/lemon-dessert.jpg';
import ChefSpecial from '../../assets/food/chef-special.jpg';
import HeroFood from '../../assets/food/hero-food.jpg';
import Bruschetta from '../../assets/food/bruschetta.jpg';
import './orderOnline.css';

const menuItems = [
    { id: 1, name: 'Greek Salad',        price: 12.99, image: GreekSalad,   category: 'Starters',  description: 'The famous Greek salad of crispy lettuce, peppers, olives and our house special feta cheese.' },
    { id: 2, name: 'Bruschetta',         price: 5.99,  image: Bruschetta,   category: 'Starters',  description: 'Grilled bread that has been smeared with garlic and seasoned with salt and olive oil.' },
    { id: 3, name: 'Lemon Dessert',      price: 5.00,  image: LemonDessert, category: 'Desserts',  description: 'This comes straight from grandma\'s recipe book — every last ingredient has been sourced and is as authentic as can be.' },
    { id: 4, name: 'Chef\'s Special',   price: 18.99, image: ChefSpecial,  category: 'Mains',     description: 'Our rotating chef\'s special prepared fresh daily with the finest local ingredients.' },
    { id: 5, name: 'Grilled Sea Bass',  price: 22.50, image: HeroFood,     category: 'Mains',     description: 'Fresh Atlantic sea bass seasoned with herbs, lemon and olive oil, grilled to perfection.' },
];

function OrderOnline() {
    const [basket, setBasket] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);

    function addToBasket(item) {
        setBasket((prev) => {
            const existing = prev.find((i) => i.id === item.id);
            if (existing) {
                return prev.map((i) => i.id === item.id ? { ...i, qty: i.qty + 1 } : i);
            }
            return [...prev, { ...item, qty: 1 }];
        });
    }

    function removeFromBasket(id) {
        setBasket((prev) => prev.filter((i) => i.id !== id));
    }

    const total = basket.reduce((sum, i) => sum + i.price * i.qty, 0);

    if (orderPlaced) {
        return (
            <main className='order-page'>
                <div className='order-success container'>
                    <h1>Order Placed!</h1>
                    <p>Your order has been received. We will start preparing it right away.</p>
                    <p className='order-total'>Total: <strong>${total.toFixed(2)}</strong></p>
                    <button className='ctaButtonColor' onClick={() => { setBasket([]); setOrderPlaced(false); }}>
                        Place Another Order
                    </button>
                </div>
            </main>
        );
    }

    return (
        <main className='order-page'>
            {/* Page header */}
            <header className='order-hero' aria-label='Order online page'>
                <div className='container'>
                    <h1>Order Online</h1>
                    <p>Fresh Little Lemon dishes delivered to your door.</p>
                </div>
            </header>

            <div className='order-body container'>
                {/* Menu grid */}
                <section aria-label='Menu items'>
                    <ul className='order-grid'>
                        {menuItems.map((item) => (
                            <li key={item.id} className='order-item'>
                                <img src={item.image} alt={item.name} className='order-item-img' />
                                <div className='order-item-body'>
                                    <span className='order-item-category'>{item.category}</span>
                                    <h3>{item.name}</h3>
                                    <p>{item.description}</p>
                                    <div className='order-item-footer'>
                                        <span className='order-item-price'>${item.price.toFixed(2)}</span>
                                        <button
                                            className='orderButtonColor'
                                            onClick={() => addToBasket(item)}
                                            aria-label={`Add ${item.name} to basket`}
                                        >
                                            Add to order
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Basket sidebar */}
                <aside className='order-basket' aria-label='Your order basket'>
                    <h2>Your Order</h2>
                    {basket.length === 0 ? (
                        <p className='basket-empty'>Your basket is empty.</p>
                    ) : (
                        <>
                            <ul className='basket-list'>
                                {basket.map((item) => (
                                    <li key={item.id} className='basket-item'>
                                        <div>
                                            <span className='basket-item-name'>{item.name}</span>
                                            <span className='basket-item-qty'> × {item.qty}</span>
                                        </div>
                                        <div className='basket-item-actions'>
                                            <span>${(item.price * item.qty).toFixed(2)}</span>
                                            <button
                                                className='basket-remove'
                                                onClick={() => removeFromBasket(item.id)}
                                                aria-label={`Remove ${item.name} from basket`}
                                            >
                                                ×
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <div className='basket-total'>
                                <span>Total</span>
                                <strong>${total.toFixed(2)}</strong>
                            </div>
                            <button
                                className='ctaButtonColor basket-checkout'
                                onClick={() => setOrderPlaced(true)}
                            >
                                Place Order
                            </button>
                        </>
                    )}
                </aside>
            </div>
        </main>
    );
}

export default OrderOnline;

