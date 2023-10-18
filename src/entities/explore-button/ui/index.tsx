import {Link} from 'react-router-dom';
import styles from './styled.module.scss';
import {BaseRoutes} from 'shared';

export function ExploreButton() {
  return (
    <Link to={BaseRoutes.Destination} className={styles.root}>
      Explore
    </Link>
  );
}
