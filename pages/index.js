import {useCallback, useRef} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Navigation} from 'swiper';
import Link from "next/link";
import MainContainer from "../components/MainContainer";
import Container from "../components/ui/Container";
import slideImage1 from '../public/slide1.jpg';
import slideImage2 from '../public/slide2.jpg';
import styles from '../styles/Home.module.css';
import Category from "../components/Category";
import HomeBanners from "../components/HomeBanners";
import Products from "../components/Products";

SwiperCore.use([Navigation]);

export default function Home() {
    return (
        <MainContainer>
            <Container>
                <HomeBanners />
                <Category />
                <Products />
            </Container>
        </MainContainer>
    )
}
