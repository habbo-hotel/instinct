import { Children } from 'components';

export interface FormProps {
  className?: string;
  children: Children;
  disabled?: boolean;
  onSubmit?: () => void;
}
