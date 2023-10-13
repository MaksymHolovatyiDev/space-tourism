import styles from './styles.module.scss';

import {Planet, planets} from 'entities/planet';
import {PlanetSelect,  useCurrentPlanet} from 'features/planet-select';

export function PlanetPanel() {
  const {planet, setPlanet} = useCurrentPlanet(planets);

  return (
    <>
      <img src={planet.img} alt={planet.name} />
      <div className={styles.margin}>
        <PlanetSelect
          data={planets}
          currentPlanet={planet}
          setCurrentPlanet={setPlanet}
        />
        <Planet currentPlanet={planet} />
      </div>
    </>
  );
}
