import React from 'react';
import styles from '../../styles/header/HeaderMenu.module.css';

const HeaderMenu = () => {
    return (
        <div className={styles.wrapper}>
            <button className={'button ' + styles.burger}>
                <span className={styles.burgerLines}>
                    <span className={styles.burgerLine}></span>
                </span>
                <span className={styles.burgerCaption}>Каталог</span>
            </button>
            <div className={styles.menuWrapper}>
                Menu
            </div>
        </div>
    );
};

export default HeaderMenu;