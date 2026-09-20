import React, { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import Order from './Order';

const showOrders = ({ orders, onDelete }) => {
    let total = 0;
    orders.forEach(el => total += Number.parseFloat(el.price));

    return (
        <div>
            {orders.map(el => (
                <Order onDelete={onDelete} key={el.id} medicine={el} />
            ))}
            <p className='total'>Сумма: {new Intl.NumberFormat().format(total)} руб.</p>
        </div>
    );
};

const showNothing = () => {
    return (
        <div className='empty'>
            <h2>Корзина пустая</h2>
        </div>
    );
};

export default function Header({ orders, onDelete }) {
    const [cartOpen, setCartOpen] = useState(false);

    return (
        <header>
            <div>
                <span className='logo'>PharmPoint</span>
                <ul className='nav'>
                    <li>Про нас</li>
                    <li>Контакты</li>
                </ul>
                <FaShoppingCart onClick={() => setCartOpen(!cartOpen)} className={`cart-button ${cartOpen && 'active'}`} />

                {cartOpen && (
                    <div className='cart'>
                        {orders.length > 0 ? showOrders({ orders, onDelete }) : showNothing()}
                    </div>
                )}
            </div>
            <div className='presentation'></div>
        </header>
    );
}