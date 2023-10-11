import { useEffect, useState } from 'react';
import styles from './Main.module.scss';
import Intro from '../../Components/Intro/Intro';
import { Link, useNavigate, Outlet } from 'react-router-dom';
function Main() {
  const navigate = useNavigate();
  const [renderTime, setRenderTime] = useState(0);
  useEffect(() => {
    if (renderTime >= 7) return;
    setTimeout(() => {
      setRenderTime((prev) => prev + 0.5);
    }, 500);
  }, [renderTime]);
  return (
    <>
      <Intro renderTime={renderTime} />
      <main className={styles.main}>
        <aside className={styles.infoWrap}>
          {renderTime >= 4 && (
            <>
              <div className={styles.profileImage}></div>
              <p className={styles.infoText}>
                <span style={{ animationDelay: '0.3s' }}>안녕하세요.</span>
                <br />
                <span style={{ animationDelay: '0.4s' }}>
                  프론트엔드 개발자 이주연입니다.
                </span>
                <br />
                <br />
                <span style={{ animationDelay: '0.5s' }}>
                  저의 포트폴리오 사이트에
                </span>
                <br />
                <span style={{ animationDelay: '0.6s' }}>
                  방문해주셔서 감사합니다.
                </span>
                <br />
                <br />
                <span style={{ animationDelay: '0.7s' }}>
                  궁금하신 사항은 아래 연락처로
                </span>{' '}
                <br />
                <span style={{ animationDelay: '0.8s' }}>
                  언제든지 연락 부탁드리겠습니다 :D
                </span>
                <br />
                <br />
                <span style={{ animationDelay: '0.9s' }}>
                  Tel. +82 10-7233-8517
                </span>
                <br />
                <span style={{ animationDelay: '1s' }}>
                  Email. leejy8596@gmail.com
                </span>
              </p>
            </>
          )}
        </aside>

        <section className={styles.contentArea}>
          <nav className={styles.navigation}>
            {renderTime >= 5 && (
              <ul>
                <li data-content="about" onClick={() => navigate('/about')}>
                  <Link to="/about">
                    <svg
                      width="62.5%"
                      height="62.5%"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="12"
                        cy="8"
                        r="3.5"
                        stroke="#ffffff"
                        strokeLinecap="round"
                        strokeWidth="1"
                      />
                      <path
                        d="M4.84913 16.9479C5.48883 14.6034 7.91473 13.5 10.345 13.5H13.655C16.0853 13.5 18.5112 14.6034 19.1509 16.9479C19.282 17.4287 19.3868 17.9489 19.4462 18.5015C19.5052 19.0507 19.0523 19.5 18.5 19.5H5.5C4.94772 19.5 4.49482 19.0507 4.55382 18.5015C4.6132 17.9489 4.71796 17.4287 4.84913 16.9479Z"
                        stroke="#ffffff"
                        strokeLinecap="round"
                        strokeWidth="1"
                      />
                    </svg>
                  </Link>
                </li>
                <li
                  data-content="portfolio"
                  onClick={() => navigate('/portfolio')}
                  style={{ animationDelay: '0.1s' }}
                >
                  <Link to="/portfolio">
                    <svg
                      width="52.5%"
                      height="52.5%"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 6.90909C10.8999 5.50893 9.20406 4.10877 5.00119 4.00602C4.72513 3.99928 4.5 4.22351 4.5 4.49965C4.5 6.54813 4.5 14.3034 4.5 16.597C4.5 16.8731 4.72515 17.09 5.00114 17.099C9.20405 17.2364 10.8999 19.0998 12 20.5M12 6.90909C13.1001 5.50893 14.7959 4.10877 18.9988 4.00602C19.2749 3.99928 19.5 4.21847 19.5 4.49461C19.5 6.78447 19.5 14.3064 19.5 16.5963C19.5 16.8724 19.2749 17.09 18.9989 17.099C14.796 17.2364 13.1001 19.0998 12 20.5M12 6.90909L12 20.5"
                        stroke="#ffffff"
                        strokeLinejoin="round"
                        strokeWidth="1"
                      />
                      <path
                        d="M19.2353 6H21.5C21.7761 6 22 6.22386 22 6.5V19.539C22 19.9436 21.5233 20.2124 21.1535 20.0481C20.3584 19.6948 19.0315 19.2632 17.2941 19.2632C14.3529 19.2632 12 21 12 21C12 21 9.64706 19.2632 6.70588 19.2632C4.96845 19.2632 3.64156 19.6948 2.84647 20.0481C2.47668 20.2124 2 19.9436 2 19.539V6.5C2 6.22386 2.22386 6 2.5 6H4.76471"
                        stroke="#ffffff"
                        strokeLinejoin="round"
                        strokeWidth="1"
                      />
                    </svg>
                  </Link>
                </li>
                <li
                  data-content="history"
                  onClick={() => navigate('/history')}
                  style={{ animationDelay: '0.2s' }}
                >
                  <Link to="/history">
                    <svg
                      width="55%"
                      height="55%"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeWidth="1"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.07868 5.06891C8.87402 1.27893 15.0437 1.31923 18.8622 5.13778C22.6824 8.95797 22.7211 15.1313 18.9262 18.9262C15.1312 22.7211 8.95793 22.6824 5.13774 18.8622C2.87389 16.5984 1.93904 13.5099 2.34047 10.5812C2.39672 10.1708 2.775 9.88377 3.18537 9.94002C3.59575 9.99627 3.88282 10.3745 3.82658 10.7849C3.4866 13.2652 4.27782 15.881 6.1984 17.8016C9.44288 21.0461 14.6664 21.0646 17.8655 17.8655C21.0646 14.6664 21.046 9.44292 17.8015 6.19844C14.5587 2.95561 9.33889 2.93539 6.13935 6.12957L6.88705 6.13333C7.30126 6.13541 7.63535 6.47288 7.63327 6.88709C7.63119 7.3013 7.29372 7.63539 6.87951 7.63331L4.33396 7.62052C3.92269 7.61845 3.58981 7.28556 3.58774 6.8743L3.57495 4.32874C3.57286 3.91454 3.90696 3.57707 4.32117 3.57498C4.73538 3.5729 5.07285 3.907 5.07493 4.32121L5.07868 5.06891ZM11.9999 7.24992C12.4141 7.24992 12.7499 7.58571 12.7499 7.99992V11.6893L15.0302 13.9696C15.3231 14.2625 15.3231 14.7374 15.0302 15.0302C14.7373 15.3231 14.2624 15.3231 13.9696 15.0302L11.2499 12.3106V7.99992C11.2499 7.58571 11.5857 7.24992 11.9999 7.24992Z"
                        fill="#ffffff"
                      />
                    </svg>
                  </Link>
                </li>
                <li
                  data-content="comment"
                  onClick={() => navigate('/comment')}
                  style={{ animationDelay: '0.3s' }}
                >
                  <Link to="/comment">
                    <svg width="45%" height="45%" viewBox="0 0 32 32">
                      <g
                        id="Page-1"
                        stroke="none"
                        strokeWidth="1"
                        fill="none"
                        fillRule="evenodd"
                      >
                        <g
                          id="Icon-Set"
                          transform="translate(-204.000000, -255.000000)"
                          fill="#ffffff"
                          strokeWidth="0.1"
                        >
                          <path
                            d="M228,267 C226.896,267 226,267.896 226,269 C226,270.104 226.896,271 228,271 C229.104,271 230,270.104 230,269 C230,267.896 229.104,267 228,267 L228,267 Z M220,281 C218.832,281 217.704,280.864 216.62,280.633 L211.912,283.463 L211.975,278.824 C208.366,276.654 206,273.066 206,269 C206,262.373 212.268,257 220,257 C227.732,257 234,262.373 234,269 C234,275.628 227.732,281 220,281 L220,281 Z M220,255 C211.164,255 204,261.269 204,269 C204,273.419 206.345,277.354 210,279.919 L210,287 L217.009,282.747 C217.979,282.907 218.977,283 220,283 C228.836,283 236,276.732 236,269 C236,261.269 228.836,255 220,255 L220,255 Z M212,267 C210.896,267 210,267.896 210,269 C210,270.104 210.896,271 212,271 C213.104,271 214,270.104 214,269 C214,267.896 213.104,267 212,267 L212,267 Z M220,267 C218.896,267 218,267.896 218,269 C218,270.104 218.896,271 220,271 C221.104,271 222,270.104 222,269 C222,267.896 221.104,267 220,267 L220,267 Z"
                            id="comment-3"
                            strokeWidth="0.1"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </Link>
                </li>
              </ul>
            )}
          </nav>
          <article className={styles.content}>
            {renderTime >= 6 && <Outlet />}
          </article>
        </section>
      </main>
    </>
  );
}
export default Main;
