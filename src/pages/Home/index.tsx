import {ExploreButton} from 'entities/explore-button';
import style from './styled.module.scss';
import {Typography} from 'shared';
import {Header} from 'entities/header';

function Home() {
  return (
    <main className={style.root}>
      <Header />
      <div className={style.container}>
        <Typography variant="heading5">So, you wat to travel to</Typography>
        <Typography variant="heading1">Space</Typography>
        <Typography>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </Typography>
      </div>
      <ExploreButton />
    </main>
  );
}

export default Home;
