import portfolio from '../../data/portfolio.js';
import styles from './Portfolio.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import SwiperCore from 'swiper';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PortfolioDetail from '../PortfolioDetail/PortfolioDetail';

export interface IPortfolioType {
  title: string;
  duration: string;
  image: string[];
  link: string;
  text: string;
}
function Portfolio() {
  const [swiper, setSwiper] = useState<SwiperCore>();
  const [slideActiveIdx, setSlideActiveIdx] = useState(0);
  const [autoplayPercentage, setAutoplayPercentage] = useState(0);
  const [activePortfolio, setActivePortfolio] = useState<IPortfolioType>(
    portfolio[slideActiveIdx]
  );
  const [isUpdate, setIsUpdate] = useState(true);
  useEffect(() => {
    setIsUpdate(true);
    setTimeout(() => {
      setActivePortfolio(portfolio[slideActiveIdx]);
    }, 500);
  }, [slideActiveIdx]);
  useEffect(() => {
    if (isUpdate)
      setTimeout(() => {
        setIsUpdate(false);
      }, 500);
  }, [isUpdate]);

  const { title } = useParams();
  const navigate = useNavigate();
  return (
    <>
      <div
        className={`${styles.container} ${title ? styles.hidden : styles.show}`}
      >
        <article className={styles.sliderWrap}>
          <Swiper
            className={styles.slider}
            onSwiper={setSwiper}
            slidesPerView={1}
            effect={'coverflow'}
            modules={[EffectCoverflow, Autoplay]}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            spaceBetween={10}
            coverflowEffect={{
              depth: 0,
              rotate: 0,
              slideShadows: false,
              stretch: 0,
            }}
            speed={1000}
            loop
            onAutoplayTimeLeft={(
              swiper: any,
              timeLeft: number,
              percentage: number
            ) => {
              setAutoplayPercentage(percentage);
            }}
            onActiveIndexChange={(swiper: any) => {
              setSlideActiveIdx(swiper.realIndex);
            }}
            breakpoints={{
              375: {
                spaceBetween: 0,
                slidesPerView: 1.6,
                centeredSlides: false,
                coverflowEffect: {
                  rotate: 0,
                  stretch: -20,
                  depth: 300,
                  modifier: 1,
                },
              },
              600: {
                centeredSlides: true,
                slidesPerView: 2,
                coverflowEffect: {
                  rotate: 0,
                  stretch: -40,
                  depth: 200,
                  modifier: 2,
                },
              },
              890: {
                coverflowEffect: {
                  rotate: 0,
                  stretch: -40,
                  depth: 200,
                  modifier: 2,
                },
              },
            }}
          >
            {portfolio.map((data) => (
              <SwiperSlide
                key={data.title}
                className={styles.slide}
                onClick={() => {
                  navigate(`/portfolio/${data.title}`);
                }}
              >
                <img src={data.image[0]} alt={data.title} />
              </SwiperSlide>
            ))}
          </Swiper>
          <ul className={styles.slideControl}>
            <li className={styles.icon} onClick={() => swiper?.slideNext()}>
              <svg
                fill="#fffff"
                width="30px"
                height="30px"
                viewBox="-8.5 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="#ffffff" d="M0 24.781v-17.594l15.281 8.813z"></path>
              </svg>
            </li>
            <li className={styles.progressWrap}>
              <span>{('0' + (slideActiveIdx + 1)).slice(-2)}</span>
              <div className={styles.progress}>
                {new Array(20).fill('').map((data, idx) => (
                  <div
                    key={idx}
                    className={`${styles.step} ${
                      1 - idx / 20 > autoplayPercentage ? styles.hit : ''
                    }`}
                  ></div>
                ))}
              </div>
              <span>{('0' + portfolio.length).slice(-2)}</span>
            </li>
          </ul>
        </article>
        <article
          className={`${styles.projectInfoWrap} ${
            isUpdate ? styles.hidden : ''
          }`}
        >
          <h3 className={styles.title}>{activePortfolio.title}</h3>
          <span className={styles.duration}>{activePortfolio.duration}</span>
        </article>
      </div>
      {title && <PortfolioDetail />}
    </>
  );
}
export default Portfolio;
