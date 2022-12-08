import styles from '../styles/MainContainer.module.css';
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import Container from "./Container";
import favicon from '../public/favicon.svg'
const MainContainer = ({children, seoTitle = 'Интернет-магазин', seoDescription = 'Покупка товаров через интернет-магазин'}) => {
    return (
        <>
            <Head>
                <title>{seoTitle}</title>
                <meta name='description' content={seoDescription} />
                <link rel="icon" href={favicon.src} type="image/svg+xml" />
            </Head>
            <Container>
                <Header />
                <main>
                    main
                    {children}
                </main>
                <Footer />
            </Container>
        </>
    );
};

export default MainContainer;