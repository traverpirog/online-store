import styles from '../styles/MainContainer.module.css';
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
const MainContainer = ({children, seoTitle = 'Интернет-магазин', seoDescription = 'Покупка товаров через интернет-магазин'}) => {
    return (
        <>
            <Head>
                <title>{seoTitle}</title>
                <meta name='description' content={seoDescription} />
            </Head>
            <Header />
            <main>
                main
                {children}
            </main>
            <Footer />
        </>
    );
};

export default MainContainer;