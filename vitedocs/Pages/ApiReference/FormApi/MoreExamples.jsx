import { Debug, useFieldState, useFormApi } from 'informed';
import { useRef } from 'react';
import { Form, Input, Button, ButtonGroup } from 'YourComponents';

// Helper function
const random = formApi => {
  const colors = ['red', 'green', 'blue', 'pink'];
  const randomIndex = Math.floor(Math.random() * colors.length);
  formApi.setValue('color', colors[randomIndex]);
};

const Buttons = () => {
  // We get formApi from context via hook
  const formApi = useFormApi();

  return (
    <ButtonGroup orientation="vertical" align="center">
      <Button type="button" onClick={() => formApi.setValue('name', 'Bill')}>
        Set Name to "Bill"
      </Button>
      <Button
        type="button"
        onClick={() => formApi.setValueQuietly('name', 'Kevin')}>
        Set Name to "Kevin" Quietly
      </Button>
      <Button type="button" onClick={() => formApi.reset()}>
        Reset
      </Button>
      <Button type="button" onClick={() => formApi.setValue('foo', 'Bar')}>
        Set Foo to "Bar"
      </Button>
      <Button type="button" onClick={() => formApi.disable()}>
        Disable
      </Button>
      <Button type="button" onClick={() => formApi.enable()}>
        Enable
      </Button>
      <Button
        type="button"
        onClick={() => formApi.setValues({ age: 26, phone: '1234567899' })}>
        All
      </Button>
      <Button
        type="button"
        onClick={() =>
          formApi.setTheseValues({ age: 30, phone: '6991234567' })
        }>
        Age & Color
      </Button>
    </ButtonGroup>
  );
};

const Example = () => {
  const formApiRef = useRef();
  return (
    <Form formApiRef={formApiRef}>
      <Input name="name" label="First Name:" initialValue="Joe" required />
      <Input name="age" label="First Name:" type="number" initialValue={28} />
      <Input name="phone" label="Phone Number:" formatter="+1 (###) ###-####" />
      <Buttons />
      <Button type="submit">Submit</Button>
      <Debug values />
      <Button type="button" onClick={() => random(formApiRef.current)}>
        Random Color via formApiRef
      </Button>
    </Form>
  );
};

export default Example;
