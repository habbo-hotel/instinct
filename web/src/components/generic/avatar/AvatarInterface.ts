export interface AvatarProps {
  className?: string;
  look?: string;
  action?: 'std'|'wav';
  gesture?: 'std';
  direction?: number;
  headDirection?: number;
  headOnly?: boolean;
  size?: 'l'|'s'|'n';
}
