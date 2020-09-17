import * as React from 'react';
import { Button } from 'antd';
import logo from './logo.svg';
import styles from './App.module.scss';

const App = React.memo((): any => {
  const hello: string = "Jean";
  return (
    <div className={styles.App}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload. {hello} <Button type="primary" ghost>Button</Button>  
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
});

export default App;
