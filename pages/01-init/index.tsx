import React from 'react';
import RenderCount from '../../common/RenderCount'
import { Form, Field } from 'react-final-form'

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const showResults = async (values: any) => {
  await sleep(1000);
  // console.log(JSON.stringify(values, null, 2));
  window.alert(JSON.stringify(values, null, 2))

}
const required = value => value ? undefined : 'Require'

const SignupForm = () => {
  return (
    <div>
      <h1>🏁 React FInal Form</h1>
      <Form onSubmit={showResults} subscription={{ submitting: true }}>
        {({ handleSubmit, values, submitting }) => <form onSubmit={handleSubmit}>

          <RenderCount />

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
                <RenderCount />
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
                <RenderCount />
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
                <RenderCount />
                <label>Email</label>
                <input {...input} placeholder={placeholder} />
                {meta.error && meta.touched && <span>{meta.error}</span>}
              </div>
            )}
          </Field>

          <button type='submit' disabled={submitting} >submit</button>

          <pre>{JSON.stringify(values, null, 2)} </pre>

        </form>}

      </Form>
    </div>
  );
};

export default SignupForm;