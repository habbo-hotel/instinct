import { BackgroundColor, Children, PrimaryColor } from 'component';

export interface CardProps {
  bg?: BackgroundColor;
  color?: PrimaryColor;
  className?: string;
  header?: Children;
  subHeader?: Children;
  children: Children;
  icon?: string;
}
