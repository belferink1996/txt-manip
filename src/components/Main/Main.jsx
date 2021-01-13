import { useState, useRef } from 'react';
import styles from './style/Main.module.css';
import CopyIcon from './icon/CopyIcon.jsx';

function Main() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const copyRef = useRef();

  const doSomeMagic = (e) => {
    let inputStr = e.target.value,
      outputStr = '';
    for (let i = inputStr.length - 1; i >= 0; i--) {
      outputStr += inputStr.charAt(i);
    }
    setInput(inputStr);
    setOutput(outputStr);
    setIsCopied(false);
  };

  const copyOutput = () => {
    if (!isCopied) {
      copyRef.current.select();
      document.execCommand('copy');
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 1000);
    }
  };

  return (
    <main>
      <input
        className={styles.input}
        value={input}
        onChange={doSomeMagic}
        placeholder='type something'
      />
      <div className={styles.readonly}>
        <input
          className={styles.output}
          value={isCopied ? 'copied 👍' : output}
          readOnly
          ref={copyRef}
          placeholder='click to copy 👉'
        />
        <CopyIcon onClick={copyOutput} />
      </div>
    </main>
  );
}

export default Main;
