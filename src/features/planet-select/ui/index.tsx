import styles from './styled.module.scss';

import {SelectedOption} from 'shared';
import {PlanetData} from 'shared';
import {Typography} from 'shared';

export function PlanetSelect({
  data,
  currentPlanet,
  setCurrentPlanet,
}: {
  data: PlanetData[];
  currentPlanet: PlanetData;
  setCurrentPlanet: (data: PlanetData) => void;
}) {
  return (
    <ul className={styles.root}>
      {data.map(el => (
        <li key={el.name} onClick={() => setCurrentPlanet(el)}>
          <SelectedOption value={currentPlanet.name} expectedValue={el.name}>
            <Typography variant="nav">{el.name}</Typography>
          </SelectedOption>
        </li>
      ))}
    </ul>
  );
}
