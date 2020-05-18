import React, { useEffect } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Grid } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, openDialog} from '../../../actions/login-index';
import LoginFormikComponent from './loginForm';

export default function LoginDialog(props) {
    const [open, setOpen] = React.useState(false);
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
    const { openDialogData } = useSelector(state => ({
        openDialogData: state.login.openDialog,
    }));
   
    useEffect(() => {
        if (openDialogData === true) {
            setOpen(true)
        }
    }, [openDialogData]);

    return (
        <div>
            <Dialog
                maxWidth='sm'
                fullWidth={true}
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
            >
                <DialogTitle id="form-dialog-title">Please Enter your login details:</DialogTitle>
                <Grid container justify="space-evenly">
                    <Grid item xs={8} sm={12} md={12}>
                        <LoginFormikComponent dialogClose={() => handleClose() } handleChange={(email, password) => handleSendAndClose(email, password)}/>
                    </Grid>
                    </Grid>

            </Dialog>
        </div>
            );
        }
        
export { LoginDialog };