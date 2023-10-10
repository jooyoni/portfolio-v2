import styles from './History.module.scss';
import history from '../../data/history';
function History() {
  return (
    <div className={styles.container}>
      <ul className={styles.historyList}>
        {history.map((history) => (
          <li key={history.title} className={styles.history}>
            <span className={styles.duration}>{history.duration}</span>
            <div className={styles.infomationWrap}>
              <div className={styles.logoWrap}>
                <img src={history.logo} alt={history.title} />
              </div>
              <div className={styles.infomation}>
                <h3>{history.title}</h3>
                <h4>{history.subTitle}</h4>
              </div>
            </div>
            <ul className={styles.detailList}>
              {history.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default History;
