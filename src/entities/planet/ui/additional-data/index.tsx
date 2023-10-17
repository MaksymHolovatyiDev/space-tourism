import {Typography} from 'shared/Typography';
import styles from './styled.module.scss';
import {PlanetData} from 'shared/Types';

export function AdditionalData({currentPlanet}: {currentPlanet: PlanetData}) {
  return (
    <div className={styles.root}>
      <div>
        <Typography
          text="subheading 2"
          additionalStyles={styles['text-center']}>
          avg. distance
        </Typography>
        <Typography
          text="subheading 1"
          additionalStyles={styles['text-center']}>
          {currentPlanet.dist}
        </Typography>
      </div>

      <div>
        <Typography
          text="subheading 2"
          additionalStyles={styles['text-center']}>
          est. travel time
        </Typography>
        <Typography
          text="subheading 1"
          additionalStyles={styles['text-center']}>
          {currentPlanet.time}
        </Typography>
      </div>
    </div>
  );
}
