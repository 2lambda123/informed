import React from 'react';
import { Routes as RouterRoutes, Route, Navigate } from 'react-router-dom';

// Components
import { Admin } from '../Pages/Admin/Admin';
import { NotFound } from '../Pages/NotFound/NotFound';
import { NotAuthorized } from '../Pages/NotAuthorized/NotAuthorized';
import { Home } from '../Pages/Home/Home';
import Intro from '../Pages/GettingStarted/Intro/Intro';
import Setup from '../Pages/GettingStarted/Setup/Setup';
import Hooks from '../Pages/GettingStarted/Hooks/Hooks';
import UseField from '../Pages/ApiReference/UseField';
import UseFieldState from '../Pages/ApiReference/UseFieldState';
import UseFieldApi from '../Pages/ApiReference/UseFieldApi';
import UseFormState from '../Pages/ApiReference/UseFormState';
import UseFormApi from '../Pages/ApiReference/UseFormApi';
import FormState from '../Pages/ApiReference/FormState/FormState';
import FieldState from '../Pages/ApiReference/FieldState/FieldState';
import FormApi from '../Pages/ApiReference/FormApi/FormApi';
import { Relevance } from '../Pages/ApiReference/Relevance/Relevance';
import { UseSubState } from '../Pages/ApiReference/UseSubState/UseSubState';
import { UseScopedState } from '../Pages/ApiReference/UseScopedState/UseScopedState';
import { ScopedComponent } from '../Pages/ApiReference/ScopeComponent/ScopeComponent';
import FieldApi from '../Pages/ApiReference/FieldApi/FieldApi';
import PathSyntax from '../Pages/ApiReference/PathSyntax/PathSyntax';
import Formatter from '../Pages/ApiReference/Formatting/Formatter/Formatter';
import Clean from '../Pages/ApiReference/Formatting/Clean/Clean';
import Mask from '../Pages/ApiReference/Formatting/Mask/Mask';
import Parse from '../Pages/ApiReference/Formatting/Parse/Parse';
import NumberFormatter from '../Pages/ApiReference/Formatting/NumberFormatter/NumberFormatter';
import ArrayFieldComponent from '../Pages/ApiReference/Arrays/ArrrayField/ArrayField';
import { Formatting } from '../Pages/GettingStarted/Formatting/Formatting';
import { Validation } from '../Pages/ApiReference/Validation/Validation/Validation';
import { AsyncValidation } from '../Pages/ApiReference/Validation/AsyncValidation/AsyncValidation';
import { ValidationControl } from '../Pages/ApiReference/Validation/ValidationControl/Validation';
import { PairedValidation } from '../Pages/ApiReference/Validation/PairedValidation/PairedValidation';
import ArrayFieldItem from '../Pages/ApiReference/Arrays/ArrayFieldItem/ArrayFieldItem';
import { ValidationMessages } from '../Pages/ApiReference/Validation/ValidationMessages/ValidationMessages';
import { SchemaIntro } from '../Pages/ApiReference/Schema/SchemaIntro/SchemaIntro';

// Routes ------------------------------------------------------------
export const Routes = () => {
  return (
    <RouterRoutes>
      <Route path="/" element={<Navigate to="getting-started/intro" />} />
      <Route path="getting-started">
        <Route path="intro" element={<Intro />} />
        <Route path="setup" element={<Setup />} />
        <Route path="hooks" element={<Hooks />} />
        <Route path="formState" element={<FormState />} />
        <Route path="formApi" element={<FormApi />} />
        <Route path="fieldState" element={<FieldState />} />
        <Route path="fieldApi" element={<FieldApi />} />
        <Route path="path-syntax" element={<PathSyntax />} />
        <Route path="array-field" element={<ArrayFieldComponent />} />
        <Route path="relevant" element={<Relevance />} />
        <Route path="formatting" element={<Formatting />} />
        <Route path="validation" element={<Validation />} />
        <Route path="schema" element={<SchemaIntro />} />
      </Route>
      <Route path="api-reference">
        <Route path="useField" element={<UseField />} />
        <Route path="useFieldState" element={<UseFieldState />} />
        <Route path="useFieldApi" element={<UseFieldApi />} />
        <Route path="useFormState" element={<UseFormState />} />
        <Route path="useFormApi" element={<UseFormApi />} />
        <Route path="useSubState" element={<UseSubState />} />
        <Route path="useScopedState" element={<UseScopedState />} />
        <Route path="formState" element={<FormState />} />
        <Route path="formApi" element={<FormApi />} />
        <Route path="fieldState" element={<FieldState />} />
        <Route path="fieldApi" element={<FieldApi />} />
        <Route path="relevant" element={<Relevance />} />
        <Route path="scope" element={<ScopedComponent />} />
        <Route path="path-syntax" element={<PathSyntax />} />
        <Route path="formatting-formatter" element={<Formatter />} />
        <Route path="formatting-number" element={<NumberFormatter />} />
        <Route path="formatting-clean" element={<Clean />} />
        <Route path="formatting-mask" element={<Mask />} />
        <Route path="formatting-parse" element={<Parse />} />
        <Route path="array-field" element={<ArrayFieldComponent />} />
        <Route path="validation" element={<Validation />} />
        <Route path="async-validation" element={<AsyncValidation />} />
        <Route path="validation-control" element={<ValidationControl />} />
        <Route path="paired-validation" element={<PairedValidation />} />

        <Route
          path="arrays-array-field"
          element={<ArrayFieldComponent showItem={false} />}
        />
        <Route path="arrays-array-field-item" element={<ArrayFieldItem />} />
        <Route path="validation-messages" element={<ValidationMessages />} />
        <Route path="schema-intro" element={<SchemaIntro />} />
      </Route>
      <Route path="home" element={<Home />} />
      <Route path="admin" element={<Admin />} />
      <Route path="unauthorized" element={<NotAuthorized />} />
      <Route path="*" element={<NotFound />} />
    </RouterRoutes>
  );
};
