import styles from './style/Header.module.css';
import logo from './img/logo.png';

export default function Header() {
  return (
    <header className={styles.component}>
      <img src={logo} alt='logo' />
      <h1>Text Manipulator</h1>
    </header>
  );
}
