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
            transform: `translateY( ${currentTechnology * -519 * 2}px)`,
            transition: 'transform 250ms linear',
          }}>
          {technologies.map(el => (
            <li className={styles.item}>
              <TechnologyItem
                technology={el.technology}
                description={el.desc}
              />
              <img src={el.img} alt={el.technology} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
