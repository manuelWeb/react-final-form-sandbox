import onSubmit from '@/common/onSubmit';
import React from 'react';
import { Form, Field } from 'react-final-form'

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const showResults = async (values: any) => {
  await sleep(2000);
  // console.log(JSON.stringify(values, null, 2));
  window.alert(JSON.stringify(values, null, 2))

}

const SignupForm = () => {
  return (
    <div>
      <h1>🏁 React FInal Form</h1>
      <Form onSubmit={showResults}>
        {({ handleSubmit, values, submitting }) => <form onSubmit={handleSubmit}>
          <div>
            <label>First Name</label>
            <Field name='firstName' component='input' placeholder='First name' />
          </div>

          <div>
            <label>Last Name</label>
            <Field name='lastName' component='input' placeholder='Last Name' />
          </div>

          <div>
            <label>Email</label>
            <Field name='email' component='input' placeholder='Email' />
          </div>

          <button type='submit' disabled={submitting} >submit</button>

          <pre>{JSON.stringify(values, null, 2)} </pre>

        </form>}

      </Form>
    </div>
  );
};

export default SignupForm;