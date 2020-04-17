import React from 'react';
import { Button } from 'antd';

const BambooEnter = props => {
  const { history } = props;
  return (
    <Button type="primary" onClick={() => history.push('/home')}>
      click
    </Button>
  );
};

export default BambooEnter;
