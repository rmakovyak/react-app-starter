import React from 'react';
import { hot } from 'react-hot-loader';
import styleguide from 'styleguide/partials/_box.scss';

import styles from './App.scss';

const App = () => (
  <div>
    <h1 className={styles.App}>Hello world</h1>
    <input className={styleguide.input} />
    <div className={styleguide.box}>
      <span>Custom label</span>
    </div>
  </div>
);

export default hot(module)(App);
