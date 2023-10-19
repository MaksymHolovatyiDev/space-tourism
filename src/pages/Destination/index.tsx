import {PlanetPanel} from 'widgets/planet-panel';
import styles from './styled.module.scss';
import {Header} from 'entities/header';

function Destination() {
  return (
    <main className={styles.root}>
      <Header />
      <PlanetPanel />
    </main>
  );
}

export default Destination;
