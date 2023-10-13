import styles from './styled.module.scss';

import {CrewSlider} from 'widgets/crew-slider';

function Crew() {
  return (
    <main className={styles.root}>
      <CrewSlider />
    </main>
  );
}

export default Crew;
