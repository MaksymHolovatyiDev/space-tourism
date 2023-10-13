import styles from './styled.module.scss';

import {Typography} from 'shared/Typography';

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
      <Typography text="heading 4">{role}</Typography>
      <Typography text="heading 3" additionalStyles={styles.margin}>
        {name}
      </Typography>
      <Typography additionalStyles={styles.bio}>{bio}</Typography>
    </>
  );
}
