import {Typography} from 'shared/Typography';
import styles from './styled.module.scss';
import {PlanetData} from 'shared/Types';

export function AdditionalData({currentPlanet}: {currentPlanet: PlanetData}) {
  return (
    <div className={styles.root}>
      <div>
        <Typography text="subheading 2">avg. distance</Typography>
        <Typography text="subheading 1">{currentPlanet.dist}</Typography>
      </div>

      <div>
        <Typography text="subheading 2">est. travel time</Typography>
        <Typography text="subheading 1">{currentPlanet.time}</Typography>
      </div>
    </div>
  );
}
