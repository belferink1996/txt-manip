import Header from './../Header/Header';
import Main from './../Main/Main';
import Footer from './../Footer/Footer';
import styles from './style/App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
