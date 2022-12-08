import React from 'react';
import Link from "next/link";
import styles from '../../styles/header/Header.module.css';
import Logo from '../../public/logo.svg'
import HeaderMenu from "./HeaderMenu";
import HeaderSearch from "./HeaderSearch";
import HeaderButtons from "./HeaderButtons";
import Container from "../Container";

const Header = () => {
    return (
        <header className={styles.wrapper}>
            <Container className={styles.container}>
                <Link href="/">
                    <img src={Logo.src} alt="Логотип Интернет-Мегамаркет" title="Логотип Интернет-Мегамаркет"/>
                </Link>
                <HeaderMenu />
                <HeaderSearch />
                <HeaderButtons />
            </Container>
        </header>
    );
};

export default Header;