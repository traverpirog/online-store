import React from 'react';
import Link from "next/link";
import styles from '../../styles/header/HeaderButtons.module.css';
import cartIcon from '../../public/header/cart.svg';
import personIcon from '../../public/header/person.svg';
import favouritesIcon from '../../public/header/favourites.svg';
import shopIcon from '../../public/header/shop.svg';

const HeaderButtons = () => {
return (
    <div className={styles.wrapper}>
        <button className={styles.item}>
            <img src={personIcon.src} alt="Войти" title="Войти в аккаунт"/>
            Войти
        </button>
        <button className={styles.item}>
            <img src={shopIcon.src} alt="Заказы" title="Перейти в Заказы"/>
            Заказы
        </button>
        <Link href="/favourites" className={styles.item}>
            <img src={favouritesIcon.src} alt="Избранное" title="Перейти в Избранное"/>
            Избранное
        </Link>
        <Link href="/cart" className={styles.item}>
            <img src={cartIcon.src} alt="Корзина" title="Перейти в Корзину"/>
            Корзина
        </Link>
    </div>
);
};

export default HeaderButtons;