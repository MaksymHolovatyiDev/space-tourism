import {Link, useLocation} from 'react-router-dom';
import styles from './styles.module.scss';
import {routes} from 'entities/header/lib';
import {Typography} from 'shared/Typography';
import {SelectedOption} from 'shared/SelectedOption';

export function HeaderList() {
  const pathname = useLocation().pathname;

  return (
    <ul className={styles.root}>
      {routes.map((el, idx) => (
        <li className={styles['full-height']} key={idx + el.name}>
          <Link to={el.path} className={styles['full-height']}>
            <SelectedOption value={pathname} expectedValue={el.path}>
              <Typography text="nav" additionalStyles={styles.bold}>
                {String(idx).padStart(2, '0')}
              </Typography>
              <Typography text="nav" additionalStyles={styles.white}>
                {el.name}
              </Typography>
            </SelectedOption>
          </Link>
        </li>
      ))}
    </ul>
  );
}
