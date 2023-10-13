import {ReactNode} from 'react';
import styles from './styled.module.scss';

export function SelectedOption({
  value,
  expectedValue,
  children,
}: {
  value: string;
  expectedValue: any;
  children: ReactNode;
}) {
  return (
    <div
      className={`${styles.option} ${
        value === expectedValue && styles['option-selected']
      }`}
      id={styles.selected}>
      {children}
    </div>
  );
}
