import {Typography} from 'shared';
import styles from './styled.module.scss';
import {AdditionalData} from './additional-data';
import {PlanetData} from 'shared';

export function Planet({currentPlanet}: {currentPlanet: PlanetData}) {
  return (
    <div className={`${styles.root}`}>
      <div>
        <Typography variant="heading2" className={styles['margin-bottom']}>
          {currentPlanet.name}
        </Typography>
        <Typography className={styles['text-center']}>
          {currentPlanet.desc}
        </Typography>
      </div>
      <AdditionalData currentPlanet={currentPlanet} />
    </div>
  );
}
