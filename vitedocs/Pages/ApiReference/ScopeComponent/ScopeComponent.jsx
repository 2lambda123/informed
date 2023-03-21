import { useEffect } from 'react';
import Example from './Example';
import exampleCode from './Example.jsx?raw';
import Code from '../../../YourComponents/Code';
import { SideBySide } from '../../../SideBySide';
import { Info } from '../../../Info';

export const ScopedComponent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <h1>
        <code>Scope</code>
      </h1>
      <Info>
        Sometimes you need to scope specific fields ( group them ). This is
        easily achieved with the use of Scope.
      </Info>
      <SideBySide
        leftHeader={<h3>Example: </h3>}
        rightHeader={<h3>Code:</h3>}
        left={<Example />}
        right={<Code input1={exampleCode} />}
      />
      <br />
      <br />
    </>
  );
};
