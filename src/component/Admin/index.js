import React from 'react';
import { compose } from 'recompose';

import { withAuthorization, withEmailVerification } from '../Session';

const Admin = () => (
  <div>
    <h1>Admin</h1>
    <p>The admin Page is accessible by only admin.</p>

  </div>
);

const condition = authUser => !!authUser;

export default compose(
  withEmailVerification,
  withAuthorization(condition),
)(Admin);