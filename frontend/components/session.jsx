import React from 'react';
import Auth from './auth/auth';
import SessionForm from './auth/session_form';

const Session = props => (
  <div className="session-section">
    <Auth />
    <SessionForm />
  </div>
);

export default Session;
