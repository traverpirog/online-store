import {Swiper, SwiperSlide} from "swiper/react";
import { Navigation } from 'swiper';
import MainContainer from "../components/MainContainer";
import Container from "../components/Container";

export default function Home() {
    return (
        <MainContainer>
            <Container>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={32}
                    slidesPerView={1.5}
                    navigation
                >
                    <SwiperSlide>123</SwiperSlide>
                    <SwiperSlide>123</SwiperSlide>
                    <SwiperSlide>123</SwiperSlide>
                    <SwiperSlide>123</SwiperSlide>
                </Swiper>
            </Container>
        </MainContainer>
    )
}
