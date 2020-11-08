export interface ConfirmationModalProps {
  isOpen: boolean;
  onToggle(): void;
  onSubmit(): void | Promise<void>;
}
