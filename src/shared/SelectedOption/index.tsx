import {ReactNode} from 'react';
import styles from './styled.module.scss';

export function SelectedOption({
  value,
  expectedValue,
  children,
  vertical,
}: {
  value: string;
  expectedValue: any;
  children: ReactNode;
  vertical?: boolean;
}) {
  return (
    <div
      className={`${styles.option} ${vertical && styles.vertical} ${
        value === expectedValue && styles['option-selected']
      }`}
      id={styles.selected}>
      {children}
    </div>
  );
}
