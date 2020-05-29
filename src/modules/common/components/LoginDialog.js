import React, { useEffect } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Grid } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, openDialog, closeError} from '../../../actions/login-index';
import LoginFormikComponent from './loginForm';
import MySnackBar from './Snackbar';

export default function LoginDialog(props) {
    const [open, setOpen] = React.useState(false);
    const [error, setError] = React.useState(false);
    const dispatch = useDispatch();
    const handleClose = () => {
        setOpen(false);
        dispatch(openDialog(false))
    };
    const handleSendAndClose = (email, password) => {
        const user = {
            email: email,
            password: password
        }
        dispatch(loginUser(user))
    }
    const { openDialogData, errorValue } = useSelector(state => ({
        openDialogData: state.login.openDialog,
        errorValue: state.login.errorData
    }));
    const errorHandler =(error) => {
        console.log('errro here', error);
        setError(error);
        setTimeout(() => {
            setError(false);
        }, 3000);
    }
    useEffect(() => {
        if (openDialogData === true) {
            setOpen(true)
        }
        if(errorValue === true){
            console.log('coming here error', errorValue)
            setTimeout(() => {
                dispatch(closeError())
            }, 3000);
        }
    }, [openDialogData, errorValue, dispatch]);

    return (
        <div>
            {
            error ?
            <MySnackBar message='Invalid Credentials, Please try again' color='red' />
            :
            null
        }
        {
            errorValue ?
            <MySnackBar message='Invalid Credentials, Please try again' color='red' />
            :
            null
        }
            <Dialog
                maxWidth='sm'
                fullWidth={true}
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Please enter your login credentials:</DialogTitle>
                <Grid container justify="space-evenly">
                    <Grid item xs={8} sm={12} md={12}>
                        <LoginFormikComponent 
                        dialogClose={() => handleClose() } 
                        handleChange={(email, password) => handleSendAndClose(email, password)}
                        errorData = { (error) => errorHandler(error)}
                        />
                    </Grid>
                    </Grid>

            </Dialog>
        </div>
            );
        }
        
export { LoginDialog };