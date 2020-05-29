import React from 'react';
import { TextField, Typography, Button, Grid, Divider } from '@material-ui/core';
import { Formik } from 'formik';
import { GoogleLogin } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { loginGoogleUser } from '../../../actions/login-index';

export default function LoginFormikComponent(props) {
    const handleSendAndClose = (email, password) => {
        props.handleChange(email, password);
    }
    const handleClose = () => {
        props.dialogClose();
    }
    const dispatch = useDispatch();
    const login = (res) => {
        handleClose();
        localStorage.setItem('auth', JSON.stringify(res.profileObj));
        dispatch(loginGoogleUser(res.profileObj));
    }
    const responseGoogle = (res) => {
        // console.log('failure')
        props.errorData(true);
    }
    return (
        <div>
            <Formik
                initialValues={{ email: '', password: '' }}
                validate={values => {
                    let errors = {};
                    if (!values.email) {
                        errors.email = 'Required*';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    } else if (!values.password) {
                        errors.password = 'Required*';
                    }
                    return errors;
                }}
                onSubmit={(values) => handleSendAndClose(values.email, values.password)}
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
                            <Grid container justify="space-evenly">
                                <Grid item xs={11}>
                                    <TextField
                                        fullWidth
                                        label="Email"
                                        type="email"
                                        name="email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email}
                                    />
                                </Grid>
                                <Grid item xs={11}>
                                    <TextField
                                        fullWidth
                                        type="password"
                                        label="Password"
                                        name="password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.password}
                                    />
                                </Grid>
                                <Grid item xs={11}>
                                    <Typography variant="overline" color="error">
                                        {(errors.email && touched.email && errors.email) || (errors.password && touched.password && errors.password)}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <br></br>
                            <Grid container justify="space-evenly">
                                <Grid item xs={5}>
                                    <Divider></Divider>
                                </Grid>
                                <Grid item xs={1}>
                                    <Typography>(or)</Typography>
                                </Grid>
                                <Grid item xs={5}>
                                    <Divider></Divider>
                                </Grid>
                            </Grid>

                            <br></br>
                            <Grid container justify="space-evenly">
                                <Grid item xs={8}>
                                    <GoogleLogin
                                        id="GoogleLogin"
                                        clientId="796480199183-onm8sgnqrtrdvcbfqn32mnvuu664fjm1.apps.googleusercontent.com"
                                        render={renderProps => (
                                            <Button variant="outlined" color="primary" onClick={
                                                renderProps.onClick
                                            } disabled={renderProps.disabled}>Google Login</Button>
                                        )}
                                        buttonText="Login"
                                        onSuccess={login}
                                        onFailure={responseGoogle}
                                        cookiePolicy={'single_host_origin'}

                                    />
                                </Grid>
                            </Grid>
							<Grid container>
							<Grid item xs={12} sm={8}>
							</Grid>
							<Grid item xs={12}sm={4}>
							<Button onClick={handleClose} color="primary">
                                Cancel
                                            </Button>
                            <Button
                                onClick={handleClose}
                                type="submit"
                                disabled={isSubmitting}
                                color="primary">
                                Login
                                            </Button>
							</Grid>
							</Grid>
                            
                        </form>
                    )}
            </Formik>
        </div>
    )
}