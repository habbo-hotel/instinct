import { Children } from 'component';

export interface FormProps {
  className?: string;
  children: Children;
  onSubmit?: () => void;
}
