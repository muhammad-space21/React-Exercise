import React, {Fragment} from 'react';
import { Link, Route } from 'react-router-dom';

import UserInfo from './userInfo';

const Users = ({match: {url}, users, props }) => (
  <Fragment>
    <ul>
      {
        users.map(({ id, name }) => 
        <li key={id}>
          <Link to={`${url}/${id}`}>{id}.{name}</Link>
        </li>
        )
      }
    </ul>
    <Route  path={`${url}/:userId`} render={
    ({match}) => <UserInfo {...props} {...users.find(user => user.id === match.params.userId)} />} 
    />
  </Fragment>
);

export default Users;