import { Info } from '../../../Info';
import CarColor from '../CarColor/CarColor';
import CarColors from '../CarColors/CarColors';
import CarColorControl from '../CarColorControl/CarColorControl';
import CarColorFieldControl from '../CarColorFieldControl/CarColorFieldControl';

import {
  TableView,
  TableHeader,
  TableBody,
  Column,
  Row,
  Cell
} from '@adobe/react-spectrum';
import Code from '../../../YourComponents/Code';
import { Link } from '../../../Link';
import { useEffect } from 'react';
import { UseSubState } from '../../ApiReference/UseSubState/UseSubState';
import { UseScopedState } from '../../ApiReference/UseScopedState/UseScopedState';

export default function Intro() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <h1>Hooks</h1>
      <Info>
        Informed gives you various hooks for getting access to the form state
        and api as well as specific field states and apis. This allows you to
        have fine grained control.
      </Info>

      <TableView
        aria-label="Example table for column dividers"
        overflowMode="wrap">
        <TableHeader>
          <Column showDivider width={200}>
            Hook
          </Column>
          <Column showDivider>Example</Column>
          <Column showDivider>Description</Column>
        </TableHeader>
        <TableBody>
          <Row>
            <Cell>
              <code>useField</code>
            </Cell>
            <Cell>
              <Code>{`const { fieldState, fieldApi } = useField();`}</Code>
            </Cell>
            <Cell>
              Use this to build your own fields{' '}
              <Link href="/api-reference/useField">( Docs )</Link>
            </Cell>
          </Row>
          <Row>
            <Cell>
              <code>useFieldState</code>
            </Cell>
            <Cell>
              <Code>{`const { value, error } = useFieldState();
              
return <div>{value}<div/>;`}</Code>
            </Cell>
            <Cell>
              Allows you to get access to specific fields state.
              <Link href="/api-reference/useFieldState">( Docs )</Link>
              <br />
              <br />
              <strong>Note:</strong> triggers re-render only when field state
              changes
            </Cell>
          </Row>
          <Row>
            <Cell>
              <code>useFieldApi</code>
            </Cell>
            <Cell>
              <Code>{`const { setValue, reset } = useFieldApi();

setValue('Hello World');`}</Code>
            </Cell>
            <Cell>
              Allows you to get access to specific fields api.{' '}
              <Link href="/api-reference/useFieldApi">( Docs )</Link>
            </Cell>
          </Row>
          <Row>
            <Cell>
              <code>useFormState</code>
            </Cell>
            <Cell>
              <Code>{`const { values, errors } = useFormState();
              
return <div>{values.foo}<div/>;`}</Code>
            </Cell>
            <Cell>
              Allows you to get access to entire form state.
              <Link href="/api-reference/useFormState">( Docs )</Link>
              <br />
              <br />
              <strong>Note:</strong> triggers re-render when anything in form
              state changes changes
            </Cell>
          </Row>
          <Row>
            <Cell>
              <code>useFormApi</code>
            </Cell>
            <Cell>
              <Code>{`const { setValue, reset } = useFormApi();

setValue('greeting', 'Hello World');`}</Code>
            </Cell>
            <Cell>
              Allows you to get access to entire form api.{' '}
              <Link href="/api-reference/useFormApi">( Docs )</Link>
            </Cell>
          </Row>

          <Row>
            <Cell>
              <code>useSubState</code>
            </Cell>
            <Cell>
              <Code>{`const { value, error } = useSubState("child");`}</Code>
            </Cell>
            <Cell>
              Allows you to get access to a sub set of the form state.
              <Link href="/api-reference/useSubState">( Docs )</Link>
            </Cell>
          </Row>

          <Row>
            <Cell>
              <code>useScopedState</code>
            </Cell>
            <Cell>
              <Code>{`const { value, error } = useScopedState();`}</Code>
            </Cell>
            <Cell>
              Allows you to get access to a sub set of the form state within a
              scope.
              <Link href="/api-reference/useScopedState">( Docs )</Link>
            </Cell>
          </Row>
        </TableBody>
      </TableView>

      <hr />
      <CarColor />
      <hr />
      <CarColors />
      <hr />
      <CarColorControl />
      <hr />
      <CarColorFieldControl />
      <hr />
      <UseSubState />
      <hr />
      <UseScopedState />
      <br />
      <br />
    </>
  );
}
