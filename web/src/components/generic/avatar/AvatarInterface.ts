export interface AvatarProps {
  look: string;
  action?: 'std'|'wav';
  gesture?: 'std';
  direction?: number;
  headDirection?: number;
  size?: 'l'|'s'|'n';
}
