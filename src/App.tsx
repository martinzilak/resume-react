import styles from './styles.module.css';
import classNames from 'classnames';

const App = () => {
  return (
    <div className={styles.a4page}>
      <div className={styles.headline}>
        <span>Martin&nbsp;</span>
        <span className={classNames(styles.orange, styles.bold)}>Ži</span>
        <span className={styles.bold}>lák</span>
      </div>

      <div className={styles.content}>
        <div className={styles.sidebar}>
          <div>
            <span className={styles.sidebarHeadline}>contact</span> <br />
            <span>Hálova 9</span> <br />
            <span>Bratislava</span> <br />
            <span>851 01</span> <br />
            <span>Slovakia</span> <br />
            <br />
            <a href="tel:+421948484490">+421 948 484 490</a> <br />
            <br />
            <a href="mailto:martin@zilak.sk">martin@zilak.sk</a> <br />
            <a href="https://zilak.sk">https://zilak.sk</a>
          </div>

          <div>
            <span className={styles.sidebarHeadline}>languages</span> <br />
            <span className={styles.language}>english&nbsp;</span>
            <span className={styles.languageLevel}>fluent</span> <br />
            <span className={styles.language}>slovak&nbsp;</span>
            <span className={styles.languageLevel}>native</span>
          </div>

          <div>
            <span className={styles.sidebarHeadline}>skills</span> <br />
          </div>

          <div>
            <span className={styles.sidebarHeadline}>hobbies</span> <br />
            <span>cooking</span> <br />
            <span>cycling</span> <br />
            <span>reading</span> <br />
          </div>
        </div>

        <div className={styles.body}>asfafs</div>
      </div>
    </div>
  );
};

export default App;
