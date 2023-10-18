import {useState} from 'react';

import styles from './styled.module.scss';

import {TechnologyItem, technologies} from 'entities/technology-item';
import {SliderButtons} from 'features/slider-buttons';

export function TechnologyList() {
  const [currentTechnology, setCurrentTechnology] = useState(0);

  return (
    <div className={styles.root}>
      <SliderButtons
        data={technologies}
        slide={currentTechnology}
        setSlide={setCurrentTechnology}
        vertical
      />
      <div className={styles.container}>
        <ul
          className={styles.list}
          style={{
            transform: `translateY( ${currentTechnology * -683 * 2}px)`,
            transition: 'transform 250ms linear',
          }}>
          {technologies.map(el => (
            <li className={styles.item} key={el.technology}>
              <TechnologyItem
                technology={el.technology}
                description={el.desc}
              />
              <picture>
                <source srcSet={el.imgLandscape} media="(max-width: 1300px)" />
                <img
                  src={el.img}
                  alt={el.technology}
                  className={styles.image}
                />
              </picture>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
