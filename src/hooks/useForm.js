import React, { useEffect, useState, useMemo } from 'react';
import { FormController } from '../FormController';
import { FormFields } from '../Components/FormFields';
import {
  FormControllerContext,
  FormApiContext,
  FormStateContext
} from '../Context';

export const useForm = ({
  onSubmit,
  onReset,
  onChange,
  onSubmitFailure,
  initialValues,
  validateFields,
  autocomplete,
  showErrorIfError,
  showErrorIfDirty,
  validateOn,
  validateOnMount,
  formApiRef,
  dontPreventDefault,
  yupSchema,
  allowEmptyStrings,
  preventEnter,
  schema,
  ajv,
  onlyValidateSchema,
  ...userProps
}) => {
  const formControllerOptions = {
    initialValues,
    validateFields,
    autocomplete,
    showErrorIfError,
    // showErrorIfTouched << wanted to call out that we specifically dont want this because its default
    showErrorIfDirty,
    validateOn,
    validateOnMount,
    // NEW STUFF
    dontPreventDefault,
    yupSchema,
    allowEmptyStrings,
    preventEnter,
    schema,
    ajv
  };

  // Create form controller
  const [formController] = useState(
    () => new FormController(formControllerOptions)
  );

  // Register for events
  useEffect(
    () => {
      const onChangeHandler = () =>
        onChange && onChange(formController.getFormState());
      const onResetHandler = () =>
        onReset && onReset(formController.getFormState());
      const onSubmitHandler = () =>
        onSubmit && onSubmit(formController.getFormState().values);
      const onFailureHandler = () =>
        onSubmitFailure &&
        onSubmitFailure(formController.getFormState().errors);

      // Register for events
      formController.on('field', onChangeHandler);
      formController.on('reset', onResetHandler);
      formController.on('submit', onSubmitHandler);
      formController.on('failure', onFailureHandler);

      // Unregister events
      return () => {
        formController.removeListener('field', onChangeHandler);
        formController.removeListener('reset', onResetHandler);
        formController.removeListener('submit', onSubmitHandler);
        formController.removeListener('failure', onFailureHandler);
      };
    },
    [onChange, onReset, onSubmit, onSubmitFailure]
  );

  // Form state will be used to trigger rerenders
  const [formState, setFormState] = useState(() =>
    formController.getFormState()
  );

  // Register for events for ALL fields!
  useEffect(() => {
    const listener = () => {
      setFormState({ ...formController.getFormState() });
    };

    formController.emitter.on('field', listener);

    // Need initial state
    setFormState({ ...formController.getFormState() });

    return () => {
      formController.emitter.removeListener('field', listener);
    };
  }, []);

  // YES! this is important! Otherwise it would get a new formApi object every render
  /// That would cause unessissarry re-renders! so do not remove useMemeo!
  const formApi = useMemo(() => {
    if (formApiRef) {
      formApiRef.current = formController.getFormApi();
    }
    return formController.getFormApi();
  }, []);

  const render = children => (
    <FormControllerContext.Provider value={formController}>
      <FormApiContext.Provider value={formApi}>
        <FormStateContext.Provider value={formState}>
          {!children ? (
            <FormFields
              schema={schema}
              onlyValidateSchema={onlyValidateSchema}
            />
          ) : (
            children
          )}
        </FormStateContext.Provider>
      </FormApiContext.Provider>
    </FormControllerContext.Provider>
  );

  return { formApi, formState, formController, render, userProps };
};
