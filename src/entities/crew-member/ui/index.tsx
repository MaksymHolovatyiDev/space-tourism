import styles from './styled.module.scss';

import {Typography} from 'shared';

export function CrewMember({
  role,
  name,
  bio,
}: {
  role: string;
  name: string;
  bio: string;
}) {
  return (
    <>
      <Typography variant="heading4">{role}</Typography>
      <Typography variant="heading3" className={styles.margin}>
        {name}
      </Typography>
      <Typography className={styles.bio}>{bio}</Typography>
    </>
  );
}
