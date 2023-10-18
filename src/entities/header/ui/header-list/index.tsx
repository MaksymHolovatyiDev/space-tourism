import {Link, useLocation} from 'react-router-dom';
import styles from './styles.module.scss';
import {routes} from 'entities/header/lib';
import {Typography} from 'shared';
import {SelectedOption} from 'shared';

export function HeaderList({headerNavigation}: {headerNavigation: boolean}) {
  const pathname = useLocation().pathname;

  return (
    <ul className={`${styles.root} ${headerNavigation && styles.show}`}>
      {routes.map((el, idx) => (
        <li className={styles['full-height']} key={idx + el.name}>
          <Link to={el.path} className={styles['full-height']}>
            <SelectedOption value={pathname} expectedValue={el.path} vertical>
              <Typography variant="nav" className={styles.bold}>
                {String(idx).padStart(2, '0')}
              </Typography>
              <Typography
                variant="nav"
                className={`${styles.white} ${styles.text}`}>
                {el.name}
              </Typography>
            </SelectedOption>
          </Link>
        </li>
      ))}
    </ul>
  );
}
