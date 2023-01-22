import React from 'react';
import { Form, Field, FormSpy } from 'react-final-form';
import createDecorator from 'final-form-focus';

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const showResults = async (values: any) => {
  await sleep(1000);
  window.alert(JSON.stringify(values, null, 2))

}
const focusOnError = createDecorator()
const required = value => value ? undefined : 'Require'

const SignupForm = () => {
  return (
    <div>
      <h1>🏁 React FInal Form</h1>
      <Form
        decorators={[focusOnError]}
        onSubmit={showResults}
        subscription={{ submitting: true }}>
        {({ handleSubmit, values, submitting }) => <form onSubmit={handleSubmit}>

          <Field
            subscription={{
              value: true,
              active: true,
              error: true,
              touched: true,
            }}
            validate={required}
            name='firstName'
            placeholder='First name'>
            {({ input, meta, placeholder }) => (
              <div className={meta.active ? 'active' : ''}>
                <label>First Name</label>
                <input {...input} placeholder={placeholder} />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>

          <Field
            subscription={{
              value: true,
              active: true,
              error: true,
              touched: true,
            }}
            validate={required}
            name='lastName'
            placeholder='Last Name'>
            {({ input, meta, placeholder }) => (
              <div className={meta.active ? 'active' : ''}>
                <label>Last Name</label>
                <input {...input} placeholder={placeholder} />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>

          <Field
            subscription={{
              value: true,
              active: true,
              error: true,
              touched: true,
            }}
            validate={required}
            name='email'
            placeholder='Email'>
            {({ input, meta, placeholder }) => (
              <div className={meta.active ? 'active' : ''}>
                <label>Email</label>
                <input {...input} placeholder={placeholder} />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>

          <button type='submit' disabled={submitting} >submit</button>

          <FormSpy subscription={{ values: true }}>
            {({ values }) => <pre>
              {JSON.stringify(values, null, 2)}
            </pre>}
          </FormSpy>

        </form>}

      </Form>
    </div>
  );
};

export default SignupForm;