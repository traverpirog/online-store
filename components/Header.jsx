import React from 'react';
import Link from "next/link";
import styles from '../styles/Header.module.css';
import Logo from '../public/logo.svg'
import HeaderMenu from "./HeaderMenu";
import HeaderSearch from "./HeaderSearch";

const Header = () => {
    return (
        <header className={styles.wrapper}>
            <Link href="/">
                <img src={Logo.src} alt="Логотип Интернет-Мегамаркет" title="Логотип Интернет-Мегамаркет"/>
            </Link>
            <HeaderMenu />
            <HeaderSearch />
        </header>
    );
};

export default Header;