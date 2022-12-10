import React, {useEffect, useState} from 'react';
import Subtitle from "./ui/Subtitle";
import styles from '../styles/Products.module.css'
import Link from "next/link";

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const url = 'https://fakestoreapi.com/products';
            const repsonse =  await fetch(url).then(res => res.json())
            setProducts(repsonse);
        };
        fetchData();
    });

    return (
        <div className={styles.wrapper}>
            <Subtitle>Популярные товары</Subtitle>
            <div className={styles.list}>
                {products.map((product) => (
                    (product.rating.rate > 4.1) && (
                            <div key={product.id} className={styles.item}>
                                <Link className={styles.image} href={'/'}>
                                    <img src={product.image} alt={product.title} title={`Ознакомиться с товаром - ${product.title}`} />
                                </Link>
                                <div className={styles.price}>{product.price} $</div>
                                <h3 className={styles.title}>{product.title}</h3>
                                <div className={styles.rate}>
                                    <div className={styles.rateEmpty} />
                                    <div className={styles.rateFilled} style={{width: `${product.rating.rate * 100 / 5}%`}} />
                                </div>
                                <button className={styles.button}>Купить</button>
                            </div>
                    )))}
            </div>
            <Link href={'/products'} className={styles.allProducts}>Посмотреть все</Link>
        </div>
    );
};

export default Products;