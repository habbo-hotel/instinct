import React from 'react';
import { Form, Input, Row } from 'instinct-frontend';

export function ProfilePreferences() {

  async function onSubmit(): Promise<void> {

  }

  return (
    <Form className="" onSubmit={onSubmit}>
      <div>
        <h4 className="form-subcategory">Youtube Video</h4>
        <Row>
          <div className="column-2">
            <Input type="text" name="youtube" placeholder="Enter the ID of the video"/>
            <div className="form-help">
              <p>Example: <b>l0U7SxXHkPY</b></p>
            </div>
          </div>
        </Row>
      </div>
    </Form>
  )
}