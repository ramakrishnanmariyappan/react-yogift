import React from 'react';
import { TextField, Typography, Button } from '@material-ui/core';
import { Formik } from 'formik';

export default function FormikComponent(props) {
  const handleSendAndClose = (email) => {
    props.getEmailData(email);
  }
  const handleClose = () => {
    props.closeDialog();
  }
  return (
    <div>
      <Formik
        initialValues={{ email: '' }}
        validate={values => {
          let errors = {};
          if (!values.email) {
            errors.email = 'Required*';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values) => {
          handleSendAndClose(values.email)
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
        }) => (
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
              <Typography variant="overline" color="error">
                {errors.email && touched.email && errors.email}
              </Typography>
              <Button onClick={handleClose} color="primary">
                Cancel
          </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                color="primary">
                Send
          </Button>
            </form>
          )}
      </Formik>
    </div>
  );
}
