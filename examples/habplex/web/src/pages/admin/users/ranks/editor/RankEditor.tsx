import { Link } from 'wouter';
import Toggle from 'react-toggle';
import { toast } from 'react-toastify';
import React, { useContext, useState } from 'react';
import { exampleRank, Rank, Permissions } from 'instinct-interfaces';
import { defaultRankEditorState, RankEditorState, RankEditorProps } from './RankEditor.types';
import { AdminLayout, Card, configContext, Container, Form, Icon, Input, Jumbotron, Row, PreviewImage } from 'instinct-frontend';

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

  function togglePermission<K extends keyof Permissions>(key: K): void {
    setState(_ => ({
      ..._,
      rank: {
        ..._.rank,
        permissions: {
          ..._.rank.permissions,
          [key]: !_.rank.permissions[key],
        }
      }
    }))
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
            <div className="mt-3" style={{ padding: 2 }}>
              <h4>Permissions</h4>
              <div className="col-lg-4">
                <div className="row">
                  <div className="col-2">
                    <Toggle checked={state.rank.permissions.websiteShowStaff} onChange={() => togglePermission('websiteShowStaff')}/>
                  </div>
                  <div className="col-10 text-right">
                    Show as Staff
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="row">
                  <div className="col-2">
                    <Toggle checked={state.rank.permissions.websiteShowAdminPanel} onChange={() => togglePermission('websiteShowAdminPanel')}/>
                  </div>
                  <div className="col-10 text-right">
                    See Admin Panel
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="row">
                  <div className="col-2">
                    <Toggle checked={state.rank.permissions.websiteManageNews} onChange={() => togglePermission('websiteManageNews')}/>
                  </div>
                  <div className="col-10 text-right">
                    Manage News
                  </div>
                </div>
              </div>
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