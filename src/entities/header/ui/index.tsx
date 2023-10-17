import {ReactSVG} from 'react-svg';
import LogoSvg from '../lib/logo.svg';
import Burger from '../lib/Burger.svg';
import Cross from '../lib/Cross.svg';

import styles from './styled.module.scss';

import {HeaderList} from './header-list';
import {Line} from './line';
import {useState} from 'react';

export function Header() {
  const [headerNavigation, setHeaderNavigation] = useState(false);

  console.log(headerNavigation);
  return (
    <header className={styles.root}>
      <ReactSVG src={LogoSvg} />

      <button
        type="button"
        onClick={() => setHeaderNavigation(prevState => !prevState)}
        className={styles.burger}>
        <ReactSVG
          src={headerNavigation ? Cross : Burger}
          className={styles.svg}
        />
      </button>
      <div className={styles.container}>
        <Line />
        <nav className={styles.navigation}>
          <HeaderList headerNavigation={headerNavigation} />
        </nav>
      </div>
    </header>
  );
}
