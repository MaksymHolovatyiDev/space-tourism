import {PlanetPanel} from 'widgets/planet-panel';
import styles from './styled.module.scss';

function Destination() {
  return (
      <main className={styles.root}>
        <PlanetPanel />
      </main>
  );
}

export default Destination;
