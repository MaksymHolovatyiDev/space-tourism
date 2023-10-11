import {ReactSVG} from 'react-svg';
import LogoSvg from '../lib/logo.svg';

import styles from './styled.module.scss';

import {HeaderList} from './header-list';

export function Header() {
  return (
    <div className={styles.root}>
      <ReactSVG src={LogoSvg} />
      <HeaderList />
    </div>
  );
}
