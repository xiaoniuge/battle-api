import React from 'react';
import JSONInput from 'react-json-editor-ajrm';
import locale from 'react-json-editor-ajrm/locale/zh-cn';

const sampleObject = {
    name: 'name',
    value: 'value',
};

const JSONEdit = () => {
    const onChange = object => {
        console.log(object);
    };

    return (
        <JSONInput
            id="a_unique_id"
            placeholder={sampleObject}
            colors={{
                string: '#DAA520',
            }}
            locale={locale}
            onChange={onChange}
            width="auto"
            height="auto"
        />
    );
};

export default JSONEdit;
