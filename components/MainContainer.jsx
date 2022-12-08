import Head from "next/head";
import Header from "./header/Header";
import Footer from "./Footer";
import favicon from '../public/favicon.svg';

const MainContainer = ({
                           children,
                           seoTitle = 'Интернет-магазин',
                           seoDescription = 'Покупка товаров через интернет-магазин'
                       }) => {
    return (
        <>
            <Head>
                <title>{seoTitle}</title>
                <meta name='description' content={seoDescription}/>
                <link rel="icon" href={favicon.src} type="image/svg+xml"/>
            </Head>
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </>
    );
};

export default MainContainer;