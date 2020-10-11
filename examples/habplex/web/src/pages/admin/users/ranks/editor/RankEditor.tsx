import { Link } from 'wouter';
import { toast } from 'react-toastify';
import React, { useContext, useState } from 'react';
import { exampleRank, Rank } from 'instinct-interfaces';
import { PreviewImage } from '../../../news-articles/editor/preview-image';
import { defaultRankEditorState, RankEditorState, RankEditorProps } from './RankEditor.types';
import { AdminLayout, Card, configContext, Container, Form, Icon, Input, Jumbotron, Row } from 'instinct-frontend';

export function RankEditor({ defaultRank = exampleRank, onSave }: RankEditorProps) {
  const { config } = useContext(configContext);
  const [ state, setState ] = useState<RankEditorState>({
    ...defaultRankEditorState,
    rank: defaultRank,
  });

  function setValue<K extends keyof RankEditorState>(key: K, value: RankEditorState[K]): void {
    setState(_ => ({
      ..._,
      [key]: value,
    }));
  }

  function setRank<K extends keyof Rank>(key: K, value: Rank[K]): void {
    setState(_ => ({
      ..._,
      rank: {
        ..._.rank,
        [key]: value,
      }
    }));
  }

  async function onSubmit() {
    setValue('showSpinner', true);

    try {
      await onSave(state.rank);
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
      <Jumbotron style={{ background: '#263238' }} title={state.rank.name}>
        <Icon type="users" />
        {state.rank.users!.length}
      </Jumbotron>
      <Container>
        <Link to="/admin/users/ranks">
          <Icon className="text-white fa-2x" type="arrow-left" />
        </Link>
        <Card header="Editor">
          <Form className="" onSubmit={onSubmit}>
            <div className="mt-3" style={{ padding: 2 }}>
              <h4>Name</h4>
              <Input type="text" name="name" onChange={setRank} value={state.rank.name}/>
            </div>
            <div className="mt-3" style={{ padding: 2 }}>
              <h4>
                Badge
                <PreviewImage className="ml-2" image={`${config.swfBadgeURL}/${state.rank.badge}.gif`} style={{ height: 31, width: 31 }} />
              </h4>
              <Input type="text" name="badge" onChange={setRank} value={state.rank.badge}/>
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
  );
}