import styles from './styled.module.scss';

import {Typography} from 'shared/Typography';

export function TechnologyItem({
  technology,
  description,
}: {
  technology: string;
  description: string;
}) {
  return (
    <div className={styles.root}>
      <Typography>The terminology…</Typography>
      <Typography text="heading 3" additionalStyles={styles.margin}>
        {technology}
      </Typography>
      <Typography additionalStyles={styles.width}>{description}</Typography>
    </div>
  );
}
