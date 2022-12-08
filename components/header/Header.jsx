import React from 'react';
import Link from "next/link";
import styles from '../../styles/header/Header.module.css';
import Logo from '../../public/logo.svg'
import HeaderMenu from "./HeaderMenu";
import HeaderSearch from "./HeaderSearch";
import HeaderButtons from "./HeaderButtons";

const Header = () => {
    return (
        <header className={styles.wrapper}>
            <Link href="/">
                <img src={Logo.src} alt="Логотип Интернет-Мегамаркет" title="Логотип Интернет-Мегамаркет"/>
            </Link>
            <HeaderMenu />
            <HeaderSearch />
            <HeaderButtons />
        </header>
    );
};

export default Header;