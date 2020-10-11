import React, { useState } from 'react';
import { UserBanDTO } from 'instinct-interfaces';
import { Form, Input, Row } from 'instinct-frontend';
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import { BanEditorProps, BanEditorState, defaultBanDTO, defaultBanEditorState } from './BanEditor.types';

export function BanEditor({ children, defaultBan = defaultBanDTO, onSave }: BanEditorProps) {
  const [ state, setState ] = useState<BanEditorState>({
    ...defaultBanEditorState,
    ban: defaultBan,
  });

  function setValue<K extends keyof BanEditorState>(key: K, value: BanEditorState[K]): void {
    setState(_ => ({
      ..._,
      [key]: value,
    }));
  }

  function setBan<K extends keyof UserBanDTO>(key: K, value: UserBanDTO[K]): void {
    setState(_ => ({
      ..._,
      ban: {
        ..._.ban,
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

  async function onSubmit() {
    setValue('showSpinner', true);

    try {
      await onSave(state.ban);
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
    <>
      <div onClick={toggleModal}>
        {children}
      </div>
      <Modal isOpen={state.showModal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Ban Editor</ModalHeader>
        <ModalBody>
          <Form className="" onSubmit={onSubmit}>
            <div className="mt-3" style={{ padding: 2 }}>
              <h4>Reason</h4>
              <Input type="text" name="name" onChange={setBan} value={state.ban.reason}/>
            </div>

            <Row className="mt-3">
              <div className="col-6">&nbsp; </div>
              <div className="col-6 text-right">
                <button className="btn btn-success" disabled={state.showSpinner}>
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