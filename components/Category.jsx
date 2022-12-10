import React, {useEffect, useState} from 'react';
import Link from "next/link";
import Subtitle from "./ui/Subtitle";
import styles from '../styles/Category.module.css'

const Category = (props) => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const categoriesBg = ['linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%)','linear-gradient(90deg, #FBED96 0%, #ABECD6 100%)','linear-gradient(90deg, #FFE259 0%, #FFA751 100%)','linear-gradient(90deg, #9796F0 0%, #FBC7D4 100%)']

    useEffect( () => {
        setLoading(true);
        async function fetchData() {
            const url = 'https://fakestoreapi.com/products/categories';
            const response = await fetch(url)
                .then(res => res.json());
            setCategories(response);
            setLoading(false);
        }
        fetchData();
    }, [])

    const changeSeparator = (name) => name.split(' ').join('-').split("'").join('')

    return (
        <section className={styles.wrapper}>
            <Subtitle>Категории товаров</Subtitle>
            <div className={styles.list}>
                {loading && <div className={styles.loader} />}
                {categories.map((category, index) => (
                    <Link href={`/category/${changeSeparator(category)}`} key={index} className={styles.item} style={{background: categoriesBg[index]}}>
                        <div className={styles.caption}>{category}</div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default Category;