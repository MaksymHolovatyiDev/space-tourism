import styles from './styled.module.scss';

import {TechnologyList} from 'widgets/technology-list';

function Technology() {
  return (
    <main className={styles.root}>
      <TechnologyList />
    </main>
  );
}

export default Technology;
