import styles from './style/Footer.module.css';

function Footer() {
  return (
    <footer className={styles.component}>
      Developed for{' '}
      <a href='http://orandt.co.il' target='blank'>
        OR&T
      </a>{' '}
      &copy; 2020
    </footer>
  );
}

export default Footer;
