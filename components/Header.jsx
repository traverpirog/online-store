import React from 'react';
import Link from "next/link";
import Logo from '../public/logo.svg'

const Header = () => {
    return (
        <header>
            <Link href="/"><img src={Logo.src} alt="Логотип Интернет-Мегамаркет" title="Логотип Интернет-Мегамаркет"/></Link>
        </header>
    );
};

export default Header;