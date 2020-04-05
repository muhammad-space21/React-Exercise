import React, {Fragment} from 'react';

const UserInfo = ({ email, id, match }) => {
  console.log(match);
  return (
    <Fragment>
      {id}
      {email}
    </Fragment>
  )
};

export default UserInfo;