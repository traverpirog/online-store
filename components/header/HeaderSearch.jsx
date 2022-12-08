import React from 'react';
import Input from "../Input";
import styles from '../../styles/header/HeaderSearch.module.css';
import searchIcon from '../../public/search.svg';

const HeaderSearch = () => {
    return (
        <div className={styles.wrapper}>
            <Input className={styles.input} placeholder={'Искать товары'} />
            <button className={styles.submit}>
                <img src={searchIcon.src} alt="Кнопка поиска" title="Кнопка поиска"/>
            </button>
        </div>
    );
};

export default HeaderSearch;