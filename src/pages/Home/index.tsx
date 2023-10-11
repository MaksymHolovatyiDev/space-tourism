import {ExploreButton} from 'entities/explore-button';
import style from './styled.module.scss';

function Home() {
  return (
    <div className={style.root}>
      <div className={style.container}>
        <p className={`${style['text-pre-title']} ${style.text}`}>
          So, you wat to travel to
        </p>
        <h1 className={`base-title ${style['text-title']} ${style.text}`}>
          Space
        </h1>
        <p className="main-text">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <ExploreButton />
    </div>
  );
}

export default Home;
