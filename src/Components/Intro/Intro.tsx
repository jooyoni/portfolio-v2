import { useEffect, useState } from 'react';
import styles from './Intro.module.scss';

interface IPropsType {
  renderTime: number;
}
function Intro({ renderTime }: IPropsType) {
  return (
    <article className={styles.container}>
      <div
        className={`${styles.blurAnimation} ${
          renderTime >= 5 ? styles.dark : ''
        }`}
      ></div>
      <div className={styles.sign}>
        <span>W</span>
        <span>e</span>
        <span>l</span>
        <span>c</span>
        <span className={styles.flicker}>o</span>
        <span>m</span>
        <span>e&nbsp;</span>
        <span className={`${renderTime >= 3 ? styles.fastFlicker : ''}`}>
          T
        </span>
        <span>o</span>
        <div className={styles.breakLine}></div>
        <span
          className={`${styles.fastFlicker} ${
            renderTime >= 7 ? styles.rotate : ''
          }`}
        >
          J
        </span>
        <span>o</span>
        <span>o</span>
        <span>Y</span>
        <span>e</span>
        <span>o</span>
        <span>n</span>
        <span>'</span>
        <span>s&nbsp;</span>
        <span>P</span>
        <span>o</span>
        <span>r</span>
        <span className={styles.flicker}>t</span>
        <span>f</span>
        <span>o</span>
        <span>l</span>
        <span>i</span>
        <span>o</span>
      </div>
    </article>
  );
}
export default Intro;
