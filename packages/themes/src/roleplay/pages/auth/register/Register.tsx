import React from 'react';
import {Link} from 'wouter';
import {FormGroup} from 'reactstrap';
import {Input, setURL} from '@instinct-prj/frontend';
import {GuestLayout} from '../../../components/layout/guest';

setURL('register', <Register />);

export function Register() {
  return (
    <GuestLayout>
      <FormGroup>
        <h3>Username</h3>
        <Input type="text" name="username" />
      </FormGroup>
      <FormGroup>
        <h3>Email</h3>
        <Input type="email" name="email" />
      </FormGroup>
      <FormGroup>
        <h3>Password</h3>
        <Input type="password" name="password" />
      </FormGroup>
      <FormGroup>
        <h3>Password Again</h3>
        <Input type="password" name="passwordAgain" />
      </FormGroup>
      <FormGroup>
        <button className="btn btn-success btn-block">Register</button>
        <hr />
        <Link to="/login">
          <button className="btn btn-dark btn-block">
            Already Have an Account?
          </button>
        </Link>
      </FormGroup>
    </GuestLayout>
  );
}
