export type MediaType = 'video' | 'photo';

export interface Media {
  id: number;
  url: string;
  type: MediaType;
  createdAt: string;
  updatedAt: string;
}
