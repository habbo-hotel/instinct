export async function initCommunityPages(): Promise<void> {
  await Promise.all([
    import('./games'),
    import('./news-article'),
    import('./photos'),
    import('./staff'),
  ]);
}