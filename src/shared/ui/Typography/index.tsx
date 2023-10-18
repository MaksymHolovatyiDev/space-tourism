import {ReactNode, createElement} from 'react';
import styles from './styled.module.scss';

const mapping = {
  heading1: 'h1',
  heading2: 'h2',
};

export function Typography({
  variant = 'default',
  children,
  className,
}: {
  variant?:
    | 'heading1'
    | 'heading2'
    | 'heading3'
    | 'heading4'
    | 'heading5'
    | 'subheading1'
    | 'subheading2'
    | 'nav'
    | 'default';
  className?: any;
  children: ReactNode;
}) {
  const tag =
    variant === 'heading1' || variant === 'heading2' ? mapping[variant] : 'p';
  return createElement(
    tag,
    {className: `${styles[variant]} ${className}`},
    children,
  );
}
