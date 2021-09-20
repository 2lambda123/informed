import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import useCursorPosition from '../../src/hooks/useCursorPosition';
// import { informedFormat } from '../../src/utils';
import { useField, useForm } from '../../src';

// prettier-ignore
describe('useField', () => {

  // const validate = value => {
  //   return !value || value.length < 5
  //     ? 'Field must be at least five characters'
  //     : undefined;
  // };

  const Form = ({ children, ...rest }) => {
    const { formController, render, userProps } = useForm(rest);
  
    return render(
      <form {...userProps} onSubmit={formController.submitForm}>
        {children}
      </form>
    );
  };
  
  const Input = React.memo(({ label, ...props }) => {
    const { render, userProps, ref, fieldState, fieldApi } = useField(props);
    const { setValue, setTouched } = fieldApi;
    const { maskedValue, error } = fieldState;
    return render(
      <label>
        {label}
        <input
          ref={ref}
          {...userProps}
          value={!maskedValue && maskedValue !== 0 ? '' : maskedValue}
          onChange={(e) => {
            setValue(e.target.value, e);
          }}
          onBlur={() => {
            setTouched(true);
          }}
          style={error ? { border: 'solid 1px red' } : null}
        />
      </label>
    );
  });

  it('should update value when user types', () => {
    const formApiRef = {};

    const { getByLabelText } = render(
      <Form
        formApiRef={formApiRef}>
        <Input name="greeting" label="input1" />
      </Form>
    );

    const input = getByLabelText('input1');
    userEvent.type(input, 'Hi!');
  
    expect(input).toHaveAttribute('value', 'Hi!');
    expect(input).toHaveValue('Hi!');
    expect(formApiRef.current.getFormState().values).toEqual({ greeting: 'Hi!' });
  });

  it('should update value when user types', () => {

    const { getByLabelText } = render(
      <Form>
        <Input name="greeting" label="input1" placeholder="Hello World"/>
      </Form>
    );

    const input = getByLabelText('input1');

    expect(input).toHaveAttribute('placeholder', 'Hello World');
  });

  it('should show error message when validation error occurs', () => {
    const { getByLabelText, getByText }  = render(
      <Form>
        <Input name="greeting"  label="input1" validateOnChange />
      </Form>
    );

    const input = getByLabelText('input1');

    userEvent.type(input, 'Hi!');
    expect(getByText('Field must be at least five characters')).toBeInTheDocument();
  });

  // const ErrorText = props => {
  //   const { fieldState, fieldApi, render, ref, userProps } = useField({
  //     ...props,
  //     validate
  //   });

  //   const { value } = fieldState;
  //   const { setValue, setTouched } = fieldApi;
  //   const { onChange, onBlur, ...rest } = userProps;
  //   return render(
  //     <React.Fragment>
  //       <input
  //         {...rest}
  //         ref={ref}
  //         value={!value && value !== 0 ? '' : value}
  //         onChange={e => {
  //           setValue(e.target.value);
  //           if (onChange) {
  //             onChange(e);
  //           }
  //         }}
  //         onBlur={e => {
  //           setTouched();
  //           if (onBlur) {
  //             onBlur(e);
  //           }
  //         }}
  //         style={fieldState.error ? { border: 'solid 1px red' } : null}
  //       />
  //       {fieldState.error ? (
  //         <small style={{ color: 'red' }}>{fieldState.error}</small>
  //       ) : null}
  //     </React.Fragment>
  //   );
  // };

  // it('should update value when user types', () => {
  //   let savedApi;
  //   const wrapper = mount(
  //     <Form
  //       getApi={api => {
  //         savedApi = api;
  //       }}>
  //       <ErrorText field="greeting" />
  //     </Form>
  //   );
  //   let input = wrapper.find('input');
  //   input.simulate('change', { target: { value: 'Hi!' } });
  //   input = wrapper.find('input');
  //   expect(input.props().value).to.equal('Hi!');
  //   expect(savedApi.getState().values).to.deep.equal({ greeting: 'Hi!' });
  // });

  // it('should show error message when validation error occurs', () => {
  //   const wrapper = mount(
  //     <Form>
  //       <ErrorText field="greeting" validateOnChange />
  //     </Form>
  //   );
  //   const input = wrapper.find('input');
  //   input.simulate('change', { target: { value: 'Hi!' } });
  //   const error = wrapper.find('small');
  //   expect(error.text()).to.equal('Field must be at least five characters');
  // });

  // /* ------------------------------ Object Value ------------------------------ */

  // describe('ObjectInput', () => {
  //   const ObjectInput = props => {
  //     const { fieldState, fieldApi, render, userProps } = useField(props);

  //     const { value } = fieldState;
  //     const { setValue, setTouched } = fieldApi;
  //     const { ...rest } = userProps;

  //     const v = value || {};

  //     const aChange = e => {
  //       const newVal = { ...v };

  //       newVal.a = e.target.value;

  //       setValue(newVal);
  //     };

  //     const bChange = e => {
  //       const newVal = { ...v };

  //       newVal.b = e.target.value;

  //       setValue(newVal);
  //     };

  //     const { a, b } = v;

  //     return render(
  //       <React.Fragment>
  //         <input
  //           {...rest}
  //           value={a ? a : ''}
  //           onChange={aChange}
  //           onBlur={() => setTouched}
  //         />
  //         <input
  //           {...rest}
  //           value={b ? b : ''}
  //           onChange={bChange}
  //           onBlur={() => setTouched()}
  //         />
  //       </React.Fragment>
  //     );
  //   };

  //   it('should update value when user types', () => {
  //     let savedApi;
  //     const wrapper = mount(
  //       <Form
  //         getApi={api => {
  //           savedApi = api;
  //         }}>
  //         <ObjectInput field="greeting" />
  //       </Form>
  //     );
  //     let input1 = wrapper.find('input').at(0);
  //     input1.simulate('change', { target: { value: 'Hi!' } });
  //     input1 = wrapper.find('input').at(0);
  //     expect(input1.props().value).to.equal('Hi!');
  //     expect(savedApi.getState().values).to.deep.equal({
  //       greeting: { a: 'Hi!' }
  //     });
  //     let input2 = wrapper.find('input').at(1);
  //     input2.simulate('change', { target: { value: 'World!' } });
  //     input2 = wrapper.find('input').at(1);
  //     expect(input2.props().value).to.equal('World!');
  //     expect(savedApi.getState().values).to.deep.equal({
  //       greeting: { a: 'Hi!', b: 'World!' }
  //     });
  //   });
  // });

  // describe('FormattedObjectInput', () => {
  //   const FormattedObjectInput = props => {
  //     const formatter = [
  //       '+',
  //       '1',
  //       ' ',
  //       /\d/,
  //       /\d/,
  //       /\d/,
  //       '-',
  //       /\d/,
  //       /\d/,
  //       /\d/,
  //       '-',
  //       /\d/,
  //       /\d/,
  //       /\d/,
  //       /\d/
  //     ];

  //     const refA = useRef();
  //     const refB = useRef();

  //     const { fieldState, fieldApi, render, userProps } = useField(props);

  //     const { value } = fieldState;
  //     const { setValue, setTouched } = fieldApi;
  //     const { ...rest } = userProps;

  //     const v = value || {};

  //     const {
  //       setCursorOffset: setCursorOffsetA,
  //       setCursor: setCursorA
  //     } = useCursorPosition({ value: v.a, inputRef: refA });
  //     const {
  //       setCursorOffset: setCursorOffsetB,
  //       setCursor: setCursorB
  //     } = useCursorPosition({ value: v.b, inputRef: refB });

  //     const aChange = e => {
  //       const newVal = { ...v };

  //       const val = e.target.value;

  //       // Remember Cursor position!
  //       if (e && e.target && e.target.selectionStart) {
  //         setCursorA(e.target.selectionStart);
  //       }

  //       const res = informedFormat(val, formatter);
  //       setCursorOffsetA(res.offset);
  //       newVal.a = res.value;

  //       setValue(newVal);
  //     };

  //     const bChange = e => {
  //       const newVal = { ...v };

  //       const val = e.target.value;

  //       // Remember Cursor position!
  //       if (e && e.target && e.target.selectionStart) {
  //         setCursorB(e.target.selectionStart);
  //       }

  //       const res = informedFormat(val, formatter);
  //       setCursorOffsetB(res.offset);
  //       newVal.b = res.value;

  //       setValue(newVal);
  //     };

  //     const { a, b } = v;

  //     return render(
  //       <React.Fragment>
  //         <input
  //           {...rest}
  //           ref={refA}
  //           value={a ? a : ''}
  //           onChange={aChange}
  //           onBlur={() => setTouched}
  //         />
  //         <input
  //           {...rest}
  //           ref={refB}
  //           value={b ? b : ''}
  //           onChange={bChange}
  //           onBlur={() => setTouched()}
  //         />
  //       </React.Fragment>
  //     );
  //   };

  //   it('should format the specified value', () => {
  //     let savedApi;

  //     const wrapper = mount(
  //       <Form
  //         getApi={api => {
  //           savedApi = api;
  //         }}>
  //         <FormattedObjectInput field="greeting" />
  //       </Form>
  //     );
  //     let input1 = wrapper.find('input').at(0);
  //     input1.simulate('change', { target: { value: '2345678912' } });
  //     input1 = wrapper.find('input').at(0);
  //     expect(input1.props().value).to.equal('+1 234-567-8912');
  //     expect(savedApi.getState().values).to.deep.equal({
  //       greeting: { a: '+1 234-567-8912' }
  //     });
  //     let input2 = wrapper.find('input').at(1);
  //     input2.simulate('change', { target: { value: '2345678913' } });
  //     input2 = wrapper.find('input').at(1);
  //     expect(input2.props().value).to.equal('+1 234-567-8913');
  //     expect(savedApi.getState().values).to.deep.equal({
  //       greeting: { a: '+1 234-567-8912', b: '+1 234-567-8913' }
  //     });
  //   });
  // });
});
