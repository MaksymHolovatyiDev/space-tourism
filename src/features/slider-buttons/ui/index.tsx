import styles from './styled.module.scss';

export function SliderButtons({
  data,
  slide,
  setSlide,
  vertical,
}: {
  data: any;
  slide: number;
  setSlide: (data: number) => void;
  vertical?: boolean;
}) {
  return (
    <ul className={vertical ? styles['root-vertical'] : styles.root}>
      {data.map((el: any, idx: number) => (
        <li key={vertical ? el.technology + idx : el.role}>
          <button
            type="button"
            onClick={() => setSlide(idx)}
            className={`${
              vertical ? styles['button-vertical'] : styles.button
            } ${
              slide === idx &&
              (vertical ? styles['selected-vertical'] : styles.selected)
            }`}>
            {vertical && idx + 1}
          </button>
        </li>
      ))}
    </ul>
  );
}
