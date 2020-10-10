import { toast } from 'react-toastify';
import React, { useState } from 'react';
import MDEditor from '@uiw/react-md-editor';
import { Article } from 'instinct-interfaces';
import { AdminLayout, Card, Container, Form, Input, Jumbotron, Row } from 'instinct-frontend';
import { defaultNewsArticleEditorState, NewsArticleEditorProps, NewsArticleEditorState } from './NewsArticleEdtitor.types';

export function NewsArticleEditor({ defaultArticle, onSave }: NewsArticleEditorProps) {
  const [ state, setState ] = useState<NewsArticleEditorState>({
    ...defaultNewsArticleEditorState,
    article: defaultArticle ?? defaultNewsArticleEditorState.article,
  });

  function setValue<K extends keyof NewsArticleEditorState>(key: K, value: NewsArticleEditorState[K]): void {
    setState(_ => ({
      ..._,
      [key]: value,
    }));
  }

  function editArticle(article: Partial<Article>): void {
    setState(_ => ({
      ..._,
      article: {
        ..._.article,
        ...article,
      },
    }));
  }

  async function onSubmit() {
    setValue('showSpinner', true);

    try {
      await onSave(state.article);
      toast.success('Your changes have been saved');
      setValue('showSpinner', false);
    } catch {
      setState(_ => ({
        ..._,
        showError: true,
        showSpinner: false,
      }));
    }
  }

  return (
    <AdminLayout permission="websiteManageNews">
      <Jumbotron style={{ background: '#263238' }} title={state.article.title}>
        <p>{state.article.description}</p>
      </Jumbotron>
      <Container>
        <Card header="Editor">
          <Form className="" onSubmit={onSubmit}>
            <div className="mt-3" style={{ padding: 2 }}>
              <h4>Description</h4>
              <Input type="text" name="description" onChange={description => editArticle({ description })} value={state.article.description }/>
            </div>
            <div className="mt-3">
              <h4>Content</h4>
              <MDEditor
                value={state.article.content}
                onChange={content => editArticle({ content })}
              />
            </div>
            <Row className="mt-3">
              <div className="col-6">&nbsp;</div>
              <div className="col-6 text-right">
                <button className="btn btn-primary" disabled={state.showSpinner}>
                  {
                    state.showSpinner
                      ? <i className="fa fa-spinner fa-spin" />
                      : 'Save'
                  }
                </button>
              </div>
            </Row>
          </Form>
        </Card>
      </Container>
    </AdminLayout>
  )
}