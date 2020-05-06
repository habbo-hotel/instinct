import { Children } from 'components';

export interface FormProps {
  className?: string;
  children: Children;
  onSubmit?: () => void;
}
