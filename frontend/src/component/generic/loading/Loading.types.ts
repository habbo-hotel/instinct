import { Children } from 'component';

export interface LoadingProps {
  children: Children;
  isLoading: boolean;
  text?: string;
}
