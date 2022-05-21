export type MediaType = 'video' | 'photo';

export interface Media {
  id: number;
  url: string;
  type: MediaType;
  createdAt: string;
  updatedAt: string;
}

export const exampleMedia: Media = {
  id: 1,
  url: '',
  type: 'photo',
  createdAt: '',
  updatedAt: '',
};
