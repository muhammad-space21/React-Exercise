import React, { Fragment } from 'react';

import ImageAvatar from '../../assets/images/avatar-2.png';

const styles = {
  fontSize: '16px',
  color: 'grey',
  alignText: 'center'
};

const imageStyles = {
  width: '100px',
  height: '100px'
};

const Card = () => {
  <Fragment styles={styles}>
    <h1>Hi there</h1>
    <img src={ImageAvatar} styles={imageStyles} alt="avatar"/>
  </Fragment>
};

export default Card;