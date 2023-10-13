import {ReactNode} from 'react';
import styles from './styled.module.scss';

export function Typography({
  text,
  children,
  additionalStyles,
}: {
  text?: string;
  additionalStyles?: any;
  children: ReactNode;
}) {
  switch (text) {
    case 'heading 1': {
      return (
        <h1
          className={`${styles.heading} ${styles.heading1} ${additionalStyles}`}>
          {children}
        </h1>
      );
    }
    case 'heading 2': {
      return (
        <h2
          className={`${styles.heading} ${styles.heading2} ${additionalStyles}`}>
          {children}
        </h2>
      );
    }
    case 'heading 3': {
      return (
        <p
          className={`${styles.heading} ${styles.heading3} ${additionalStyles}`}>
          {children}
        </p>
      );
    }
    case 'heading 4': {
      return (
        <p
          className={`${styles.heading} ${styles.heading4} ${additionalStyles}`}>
          {children}
        </p>
      );
    }
    case 'heading 5': {
      return (
        <p className={`${styles.heading5} ${additionalStyles}`}>{children}</p>
      );
    }
    case 'subheading 1': {
      return (
        <p
          className={`${styles.subheading} ${styles.subheading1} ${additionalStyles}`}>
          {children}
        </p>
      );
    }
    case 'subheading 2': {
      return (
        <p
          className={`${styles.subheading} ${styles.subheading2} ${additionalStyles}`}>
          {children}
        </p>
      );
    }
    case 'nav': {
      return <p className={`${styles.nav} ${additionalStyles}`}>{children}</p>;
    }
    default: {
      return <p className={`${styles.text} ${additionalStyles}`}>{children}</p>;
    }
  }
}
