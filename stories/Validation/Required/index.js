import React, { Component } from 'react';
import Code from '../../utils/Code';
import withDocs from '../../utils/withDocs';
import Modal from '../../utils/Modal';
import readme from './README.md';

import {
  Form,
  useFormContext,
  Input,
  TextArea,
  RadioGroup,
  Radio,
  Select,
  Option,
  Checkbox,
  Scope,
  Debug
} from '../../../src';

class SimpleValidation extends Component {
  render() {
    return (
      <div>
        <Form
          onSubmit={({ values }) =>
            window.alert(JSON.stringify(values, null, 2))
          }>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, marginRight: '2rem' }}>
              <TextArea name="bio" label="Bio" validate={validate} />
              <Input name="favorite.color" label="Favorite color:" validate={validate} />
              <Scope scope="favorite">
                <Input name="food" label="Favorite food:" required />
                <Input name="animal" label="Favorite animal:" required />
              </Scope>
              <Input name="friends[0]" label="Friend 1:" validate={validate} />
              <Input name="friends[1]" label="Friend 2:" validate={validate} />
              <Input name="friends[2]" label="Friend 3:" validate={validate} />
              <TextArea name="bio" label="Bio" validate={validate} />
              <RadioGroup name="gender" label="Gender" validate={validate}>
                <Radio value="male" label="Male:" />
                <Radio value="female" label="Female:" />
              </RadioGroup>
              <Select name="status" label="Relationship status:" validate={validate}>
                <Option value="" disabled>
                  Select One...
                </Option>
                <Option value="single">Single</Option>
                <Option value="relationship">Relationship</Option>
                <Option value="complicated">Complicated</Option>
              </Select>
              <Select
                name="colors"
                label="Colors:"
                multiple
                style={{ height: '100px', width: '200px' }}>
                <Option value="red">Red</Option>
                <Option value="green">Green</Option>
                <Option value="blue">Blue</Option>
                <Option value="yellow">Yellow</Option>
                <Option value="orange">Orange</Option>
                <Option value="purple">Purple</Option>
              </Select>
              <Checkbox name="authorize" label="Authorize:" validate={validate} />
              <button type="submit">Submit</button>
            </div>
            <div style={{ flex: 2, minWidth: '300px', marginLeft: '3rem' }}>
              <Debug values errors invalid valid />
            </div>
          </div>
        </Form>
      </div>
    );
  }
}

export default withDocs(readme, () => <SimpleValidation />);
