import {Typography} from 'shared/Typography';
import styles from './styled.module.scss';

export function Title() {
  return (
    <>
      <Typography text="heading 5" additionalStyles={styles['color-gray']}>
        erw
      </Typography>
      <Typography text="heading 5" additionalStyles={styles['color-white']}>
        erw
      </Typography>
    </>
  );
}
