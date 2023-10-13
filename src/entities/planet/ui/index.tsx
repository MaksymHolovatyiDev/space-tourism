import {Typography} from 'shared/Typography';
import styles from './styled.module.scss';
import {AdditionalData} from './additional-data';
import {PlanetData} from 'shared/Types';

export function Planet({currentPlanet}: {currentPlanet: PlanetData}) {
  return (
    <div className={styles.root}>
      <div>
        <Typography text="heading 2" additionalStyles={styles['margin-bottom']}>
          {currentPlanet.name}
        </Typography>
        <Typography>{currentPlanet.desc}</Typography>
      </div>
      <AdditionalData currentPlanet={currentPlanet} />
    </div>
  );
}
