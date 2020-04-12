export interface AvatarProps {
  className?: string;
  look: string;
  action?: 'std'|'wav';
  gesture?: 'std';
  direction?: number;
  headDirection?: number;
  size?: 'l'|'s'|'n';
}
