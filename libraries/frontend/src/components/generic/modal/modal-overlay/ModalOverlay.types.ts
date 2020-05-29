import { Children } from 'components';

export interface ModalOverlayProps {
  children: Children;
  header?: string;
  isOpen: boolean;
  onToggle?: () => void;
}
