import { BackgroundColor, Children } from '../../common.type';

export interface ButtonProps {
  className?: string;
  onClick?: () => void;
  color?: BackgroundColor;
  children: Children;
  style?: object;
  type?: 'button' | 'submit';
}
