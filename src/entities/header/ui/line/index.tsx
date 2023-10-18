import {useTitle} from 'entities/header/lib';
import styles from './styled.module.scss';

import {Typography} from 'shared';

export function Line() {
  const data = useTitle();

  return (
    <div className={styles.root}>
      {data && (
        <div className={styles.container}>
          <Typography variant="heading5" className={styles.gray}>
            {data.num}
          </Typography>{' '}
          <Typography variant="heading5" className={styles.white}>
            {data.title}
          </Typography>
        </div>
      )}
    </div>
  );
}
