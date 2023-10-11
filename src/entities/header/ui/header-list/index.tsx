import {Link} from 'react-router-dom';
import styles from './styles.module.scss';
import {routes} from 'entities/header/lib';

export function HeaderList() {
  return (
    <ul className={styles.root}>
      <div className={styles.line} />
      {routes.map((el, idx) => (
        <li className={styles['full-height']} key={idx + el}>
          <Link to={el} className={`${styles.link} ${styles['full-height']}`}>
            <span className={styles['link-bold']}>
              {String(idx).padStart(2, '0')}
            </span>{' '}
            {el}
          </Link>
        </li>
      ))}
    </ul>
  );
}
