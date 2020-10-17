import {Article, exampleArticle} from '@instinct/interface';

export interface NewsArticleEditorProps {
  defaultArticle?: Article;
  onSave: (article: Article) => Promise<void>;
}

export interface NewsArticleEditorState {
  article: Article;
  showSpinner: boolean;
  showError: boolean;
}

export const defaultNewsArticleEditorState: NewsArticleEditorState = {
  article: exampleArticle,
  showSpinner: false,
  showError: false,
};
