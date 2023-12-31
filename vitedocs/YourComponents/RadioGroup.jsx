import React from 'react';
import { useField } from 'informed';
import { Radio, RadioGroup } from '@adobe/react-spectrum';

const Input = ({ children, ...props }) => {
  const { render, informed, fieldState, fieldApi, userProps, ref } = useField({
    type: 'text',
    ...props
  });
  const { required, options } = userProps;
  const { error, showError } = fieldState;
  return render(
    <RadioGroup
      ref={ref}
      validationState={!error ? null : 'invalid'}
      errorMessage={showError ? error : undefined}
      isRequired={required}
      {...userProps}
      {...informed}
      value={informed.value}
      onChange={v => fieldApi.setValue(v)}>
      {options
        ? options.map(option => (
            <Radio key={option.value} value={option.value}>
              {option.label}
            </Radio>
          ))
        : children}
    </RadioGroup>
  );
};

export default Input;
