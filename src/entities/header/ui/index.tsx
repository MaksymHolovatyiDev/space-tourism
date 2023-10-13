import {ReactSVG} from 'react-svg';
import LogoSvg from '../lib/logo.svg';

import styles from './styled.module.scss';

import {HeaderList} from './header-list';
import {Line} from './line';

export function Header() {
  return (
    <header className={styles.root}>
      <ReactSVG src={LogoSvg} />
      <div className={styles.container}>
        <Line />
        <nav className={styles.navigation}>
          <HeaderList />
        </nav>
      </div>
    </header>
  );
}
