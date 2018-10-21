import React from 'react';
import { hot } from 'react-hot-loader';
import main from 'styleguide/main.css';

import styles from './App.css';

const App = () => (
  <div>
    <h1 className={styles.App}>Hello world</h1>
    <input className={main.input} />
  </div>
);

export default hot(module)(App);
