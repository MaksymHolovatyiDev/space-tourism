import {Typography} from 'shared';
import styles from './styled.module.scss';
import {PlanetData} from 'shared';

export function AdditionalData({currentPlanet}: {currentPlanet: PlanetData}) {
  return (
    <div className={styles.root}>
      <div>
        <Typography variant="subheading2" className={styles['text-center']}>
          avg. distance
        </Typography>
        <Typography variant="subheading1" className={styles['text-center']}>
          {currentPlanet.dist}
        </Typography>
      </div>

      <div>
        <Typography variant="subheading2" className={styles['text-center']}>
          est. travel time
        </Typography>
        <Typography variant="subheading1" className={styles['text-center']}>
          {currentPlanet.time}
        </Typography>
      </div>
    </div>
  );
}
