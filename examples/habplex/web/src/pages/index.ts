import { initCommunityPages } from './community';

export async function initPages(): Promise<void> {
  await Promise.all([
    import('./admin'),
    import('./auth'),
    initCommunityPages(),
    import('./error'),
    import('./home'),
    import('./rooms'),
  ]);
}