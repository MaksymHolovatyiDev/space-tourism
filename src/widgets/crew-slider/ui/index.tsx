import styles from './styles.module.scss';

import {CrewMember, crew} from 'entities/crew-member';
import {SliderButtons} from 'features/slider-buttons';
import {useState} from 'react';

export function CrewSlider() {
  const [slide, setSlide] = useState(0);

  return (
    <div className={styles.root}>
      <ul
        className={styles.container}
        style={{
          transform: `translateX( ${slide * -200}%)`,
          transition: 'transform 250ms linear',
        }}>
        {crew.map(el => (
          <li key={el.name + el.role} className={styles.item}>
            <CrewMember role={el.role} name={el.name} bio={el.bio} />
            <img
              src={el.img}
              alt={el.name}
              className={styles.img}
              style={{right: el.imgRight}}
            />
          </li>
        ))}
      </ul>
      <SliderButtons data={crew} slide={slide} setSlide={setSlide} />
    </div>
  );
}
