import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import FormikComponent from './Formik';

function PaperComponent(props) {
  return (
    <Draggable cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}


class DraggableDialog extends React.Component {
  state = {
    open: false
  }
  getDataEmail = (email) => {
    //handle send
    this.props.getEmail(email)
    //close dialog
    this.setState({
      open: false
    })
  }
  handleOpenClose = () => {
    this.setState({
      open: !this.state.open
    })
  };
  render(){
  const { open } = this.state
  return (
    <div>
      <Button variant="contained" color="primary" onClick={this.handleOpenClose}>
        send this gift card
      </Button>
      <Dialog
        open={open}
        onClose={this.handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Send Gift card
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            You can send this gift card to anyone. Just fill-in the email address below
          </DialogContentText>
          <FormikComponent getEmailData={(email) => this.getDataEmail(email)} closeDialog={() => this.handleOpenClose()}/>
        </DialogContent>
      </Dialog>
    </div>
  )}
}

export default DraggableDialog;