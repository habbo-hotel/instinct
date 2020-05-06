import { Children } from 'component';

export interface ModalOverlayProps {
  children: Children;
  header: string;
  isOpen: boolean;
  onToggle?: () => void;
}
