import { ModalOverlayProps } from 'components';

export interface ModalButtonProps extends Omit<ModalOverlayProps, 'isOpen'> {
  button: string;
  className?: string;
  style?: object;
}

export interface ModalButtonState {
  showModal: boolean;
}

export const defaultModalButtonState: ModalButtonState = {
  showModal: false,
};
