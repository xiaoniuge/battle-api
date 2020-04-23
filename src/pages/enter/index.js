import React from 'react';
import { Button } from 'antd';

const BambooEnter = props => {
    const { history } = props;
    return (
        <Button type="primary" onClick={() => history.push('/home/project/application/list')}>
            click
        </Button>
    );
};

export default BambooEnter;
