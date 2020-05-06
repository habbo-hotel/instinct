import { BackgroundColor, Children } from 'component';

export interface ButtonProps {
  className?: string;
  onClick?: () => void;
  color?: BackgroundColor;
  children: Children;
  style?: object;
  type?: 'button' | 'submit';
}
