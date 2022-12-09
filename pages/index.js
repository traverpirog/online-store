import {useCallback, useRef} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import SwiperCore, {Navigation} from 'swiper';
import Link from "next/link";
import MainContainer from "../components/MainContainer";
import Container from "../components/Container";
import slideImage1 from '../public/slide1.jpg';
import slideImage2 from '../public/slide2.jpg';
import styles from '../styles/Home.module.css';

SwiperCore.use([Navigation]);

export default function Home() {
    const sliderRef = useRef(null);
    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);
    return (
        <MainContainer>
            <Container>
                <div className={styles.hero}>
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={16}
                        slidesPerView={1.33}
                        ref={sliderRef}
                        loop={true}
                    >
                        <SwiperSlide>
                            <Link className={styles.slideLink} href={'/'}>
                                <img src={slideImage1.src} alt="Акция - 1" title="Акция - 1"/>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link className={styles.slideLink} href={'/'}>
                                <img src={slideImage2.src} alt="Акция - 2" title="Акция - 2"/>
                            </Link>
                        </SwiperSlide>
                    </Swiper>
                    <div className={styles.arrow + ' ' + styles.prev} onClick={handlePrev}>
                        <svg width="105" height="188" viewBox="0 0 105 188" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M87.0754 3.07538C91.1759 -1.02513 97.8241 -1.02513 101.925 3.07538C106.025 7.17588 106.025 13.8241 101.925 17.9246L25.8492 94L101.925 170.075C106.025 174.176 106.025 180.824 101.925 184.925C97.8241 189.025 91.1759 189.025 87.0754 184.925L3.57538 101.425C-0.525124 97.3241 -0.525124 90.6759 3.57538 86.5754L87.0754 3.07538Z" fill="#1C1F22"/>
                        </svg>
                    </div>
                    <div className={styles.arrow + ' ' + styles.next} onClick={handleNext}>
                        <svg width="105" height="188" viewBox="0 0 105 188" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.4246 3.07538C14.3241 -1.02513 7.67588 -1.02513 3.57538 3.07538C-0.525126 7.17588 -0.525126 13.8241 3.57538 17.9246L79.6508 94L3.57538 170.075C-0.525126 174.176 -0.525126 180.824 3.57538 184.924C7.67588 189.025 14.3241 189.025 18.4246 184.924L101.925 101.424C106.025 97.3241 106.025 90.6759 101.925 86.5754L18.4246 3.07538Z" fill="#1C1F22"/>
                        </svg>
                    </div>
                </div>
            </Container>
        </MainContainer>
    )
}
