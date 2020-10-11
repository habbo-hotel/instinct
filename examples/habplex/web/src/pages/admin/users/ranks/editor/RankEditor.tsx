import Toggle from 'react-toggle';
import { toast } from 'react-toastify';
import React, { useContext, useState } from 'react';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { exampleRank, Rank, Permissions } from 'instinct-interfaces';
import { configContext, Form, Input, Row, PreviewImage } from 'instinct-frontend';
import { defaultRankEditorState, RankEditorState, RankEditorProps } from './RankEditor.types';

export function RankEditor({ children, defaultRank = exampleRank, onSave }: RankEditorProps) {
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

  function toggleModal(): void {
    setState(_ => ({
      ..._,
      showModal: !_.showModal,
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

  const permissionKeyToWord: Record<keyof Permissions, string> = {
    websiteShowStaff: 'Show as Staff',
    websiteShowAdminPanel: 'Use Admin Panel',
    websiteManageNews: 'Manage News',
    websiteManageRanks: 'Manage Ranks',
    websiteManageUsers: 'Manage Users',
    websiteManageBans: 'Manage Bans',
  }

  const permissionIndexes: Array<keyof Permissions> = Object.keys(permissionKeyToWord) as any;

  return (
    <>
      <div onClick={toggleModal}>
        {children}
      </div>
      <Modal isOpen={state.showModal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Rank Editor</ModalHeader>
        <ModalBody>
          <Form className="" onSubmit={onSubmit}>
            <div className="mt-3" style={{ padding: 2 }}>
              <h4>Name</h4>
              <Input type="text" name="name" onChange={setRank} value={state.rank.name}/>
            </div>
            <div className="mt-3 row" style={{ padding: 2 }}>
             <div className="col-8">
               <h4>Badge</h4>
               <Input type="text" name="badge" onChange={setRank} value={state.rank.badge}/>
             </div>
              <div className="col-4">
                <img alt="rank badge" src={`${config.swfBadgeURL}/${state.rank.badge}.gif`} style={{ marginTop: 30 }}/>
              </div>
            </div>
            <div className="mt-3" style={{ padding: 2 }}>
              <h4>Permissions</h4>
              {
                permissionIndexes.map(permission => (
                  <div className="col-lg-6" key={permission}>
                    <div className="row">
                      <div className="col-2">
                        <Toggle checked={state.rank.permissions[permission]} onChange={() => togglePermission(permission)}/>
                      </div>
                      <div className="col-10 text-right">
                        {permissionKeyToWord[permission]}
                      </div>
                    </div>
                  </div>
                ))
              }
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
        </ModalBody>
      </Modal>
    </>
  );
}