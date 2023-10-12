import { useEffect, useState } from 'react';
import styles from './PortfolioDetail.module.scss';
import { IPortfolioType } from 'Components/Portfolio/Portfolio';
import portfolio from '../../data/portfolio';
import { useNavigate, useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore from 'swiper';
function PortfolioDetail() {
  const [swiper, setSwiper] = useState<SwiperCore>();
  const [selectedPortfolio, setSelectedPortfolio] = useState<IPortfolioType>();
  const { title } = useParams();

  useEffect(() => {
    let newData: IPortfolioType | undefined = undefined;
    portfolio.map((data) => {
      if (data.title == title) newData = data;
    });
    if (!newData) {
      alert('잘못된 접근입니다.');
      navigate('/');
      return;
    }
    setSelectedPortfolio(newData);
  }, [title]);
  const navigate = useNavigate();
  return (
    <>
      {selectedPortfolio && (
        <article className={styles.portfolioDetailWrap}>
          <div className={styles.top} onClick={() => navigate(-1)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M6 12L18 12M6 12L12 6M6 12L12 18"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <section className={styles.projectImagesWrap}>
            <Swiper slidesPerView={1} onSwiper={setSwiper}>
              {selectedPortfolio.image.map((image, idx) => (
                <SwiperSlide key={idx} className={styles.imageSlide}>
                  <img src={image} alt={selectedPortfolio.title} />
                </SwiperSlide>
              ))}
            </Swiper>
            {selectedPortfolio.image.length >= 2 && (
              <>
                {!swiper?.isBeginning && (
                  <div
                    className={`${styles.prevBtn} ${styles.sliderControlBtn}`}
                    onClick={() => swiper?.slidePrev()}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M15 18L9 12L15 6"
                        stroke="#ffffff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
                {!swiper?.isEnd && (
                  <div
                    className={`${styles.nextBtn} ${styles.sliderControlBtn}`}
                    onClick={() => swiper?.slideNext()}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M15 18L9 12L15 6"
                        stroke="#ffffff"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </>
            )}
          </section>
          <section className={styles.portfolioDetailInfoWrap}>
            <h3>{selectedPortfolio.title}</h3>
            <span>{selectedPortfolio.duration}</span>
            <p dangerouslySetInnerHTML={{ __html: selectedPortfolio.text }}></p>
          </section>
          {selectedPortfolio.link && (
            <a
              className={styles.linkBtn}
              href={selectedPortfolio.link}
              target="_blank"
            >
              Go to site
            </a>
          )}
        </article>
      )}
    </>
  );
}
export default PortfolioDetail;
