import { BackgroundColor, Children } from 'components';

export interface ButtonProps {
  className?: string;
  onClick?: () => void;
  color?: BackgroundColor;
  children: Children;
  style?: object;
  type?: 'button' | 'submit';
}
