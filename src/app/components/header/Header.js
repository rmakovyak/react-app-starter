import React from 'react';
import classNames from 'classnames';

import { container } from 'styleguide/vendor/bootstrap.scss';
import logo from 'assets/images/logo.svg';

import {
  headerContainer,
  header,
  navigation,
  navigationLink,
} from './Header.scss';

function Header() {
  return (
    <header className={headerContainer}>
      <div className={classNames(container, header)}>
        <img src={logo} alt="smarthost_logo" />
        <nav className={navigation}>
          <a className={navigationLink} href="/guests">
            Gäste
          </a>
          <a className={navigationLink} href="/campaigns">
            Kampagnen
          </a>
          <a className={navigationLink} href="/offers">
            Angebote
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
