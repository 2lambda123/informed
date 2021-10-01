import React from 'react';
import Code from '../../utils/Code';
import withDocs from '../../utils/withDocs';
import readme from './README.md';

import { Form, Input, Debug } from '../../../src';

const validate = value => {
  if (!value || value.length < 5)
    return 'Field must be at least five characters';
};

const asyncValidate = username => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulate username check
      if (['joseph', 'tanner', 'billy', 'bobby'].includes(username)) {
        return resolve('That username is taken');
      }
      // Simulate request faulure
      if (username === 'reject') {
        return reject(new Error('Unable to validate username.'));
      }
      return resolve();
    }, 2000);
  });
};

const ValidationControl = () => (
  <div>
    <Form id="validate-control-form">
      {({ formApi, formState }) => (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, marginRight: '2rem' }}>
            <h4>validateOn="blur" ( default )</h4>
            <Input
              name="username1"
              label="Username"
              required
              validate={validate}
              asyncValidate={asyncValidate}
            />
            <h4>validateOn="change"</h4>
            <Input
              name="username2"
              label="Username"
              validateOn="change"
              required
              validate={validate}
              asyncValidate={asyncValidate}
            />
            <h4>validateOn="change-blur"</h4>
            <Input
              name="username3"
              label="Username"
              validateOn="change-blur"
              required
              validate={validate}
              asyncValidate={asyncValidate}
            />
            <h4>validateOn="change-submit"</h4>
            <Input
              name="username4"
              label="Username"
              validateOn="change-submit"
              required
              validate={validate}
              asyncValidate={asyncValidate}
            />
            <h4>validateOn="blur-submit"</h4>
            <Input
              name="username5"
              label="Username"
              validateOn="blur-submit"
              required
              validate={validate}
              asyncValidate={asyncValidate}
            />
            <h4>validateOn="submit"</h4>
            <Input
              name="username6"
              label="Username"
              validateOn="submit"
              required
              validate={validate}
              asyncValidate={asyncValidate}
            />
            <button type="submit">Submit</button>
          </div>
          <div style={{ flex: 2, minWidth: '300px', marginLeft: '3rem' }}>
            <Debug values errors invalid validating />
          </div>
        </div>
      )}
    </Form>
  </div>
);

export default withDocs(readme, ValidationControl);
