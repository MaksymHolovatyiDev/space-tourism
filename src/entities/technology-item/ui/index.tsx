import styles from './styled.module.scss';

import {Typography} from 'shared';

export function TechnologyItem({
  technology,
  description,
}: {
  technology: string;
  description: string;
}) {
  return (
    <div className={styles.root}>
      <Typography className={`${styles.text} ${styles.terminology}`}>
        The terminology…
      </Typography>
      <Typography variant="heading3" className={styles.margin}>
        {technology}
      </Typography>
      <Typography className={styles.width}>{description}</Typography>
    </div>
  );
}
