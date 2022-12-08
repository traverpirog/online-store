import React from 'react';
import Input from "./Input";
import styles from '../styles/HeaderSearch.module.css'

const HeaderSearch = () => {
    return (
        <div className={styles.wrapper}>
            <Input className={styles.input} placeholder={'Искать товары'} />
        </div>
    );
};

export default HeaderSearch;