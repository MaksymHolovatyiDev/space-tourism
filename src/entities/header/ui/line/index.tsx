import {useTitle} from 'entities/header/lib';
import styles from './styled.module.scss';

import {Typography} from 'shared/Typography';

export function Line() {
  const data = useTitle();

  return (
    <div className={styles.root}>
      {data && (
        <div className={styles.container}>
          <Typography text="heading 5" additionalStyles={styles.gray}>
            {data.num}
          </Typography>{' '}
          <Typography text="heading 5" additionalStyles={styles.white}>
            {data.title}
          </Typography>
        </div>
      )}
    </div>
  );
}
