import { Header } from 'entities/header';
import styles from './styled.module.scss';

import {TechnologyList} from 'widgets/technology-list';

function Technology() {
  return (
    <main className={styles.root}>
      <Header/>
      <TechnologyList />
    </main>
  );
}

export default Technology;
