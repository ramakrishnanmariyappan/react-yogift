import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { login, logout, createUser, loginGoogleUser, openDialog } from "../../../actions/login-index";
import { bindActionCreators } from "redux";
import history from "../../common/components/history";
import MySnackBar from "../../common/components/Snackbar";
import Styles from '../../../assets/css/Header.module.css';
import { LoginDialog } from "../../common/components/LoginDialog";
import { adminEmail } from "../../../config/constants";

const styles = {
  root: {
    flexGrow: 1,
    flexShrink: 1,
    width: '100%'
  },
  grow: {
    flexGrow: 1
  },
  toolBar: {
    background: "#32567e"
  }
};

export class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showErrorSnack: false
    }
  }
  componentWillMount(){
    if(localStorage.getItem('auth')){
      this.props.loginGoogleUser(JSON.parse(localStorage.getItem('auth')));
    }
  }
  handleLoginFunc(e) {
    this.props.openDialog(true);
  }
  render() {
    const { showErrorSnack } = this.state
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        {
          showErrorSnack ?
            <MySnackBar message='Network Error! Please try again' color='red' />
            :
            null
        }
        <LoginDialog />
        <AppBar position="static">
          <Toolbar className={classes.toolBar}>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              <Button onClick={this.goTolanding}>
                <span style={{ fontSize: "1.2em", color: "#ffffff" }}>
                  YOYOGift
                </span>
              </Button>
            </Typography>
            {(this.props.isLoggedIn && !adminEmail.includes(this.props.userDetails.email)) ? (
              <Button className={Styles.headerButton} color="inherit" onClick={this.giftsReceived}>
                GIFTS RECEIVED
              </Button>
            ) : null}
            {(this.props.isLoggedIn && !adminEmail.includes(this.props.userDetails.email)) ? (
              <Button className={Styles.headerButton} color="inherit" onClick={this.giftsSend}>
                GIFTS SENT
              </Button>
            ) : null}
            {(this.props.isLoggedIn && adminEmail.includes(this.props.userDetails.email)) ? (
              <Button className={Styles.headerButton} color="inherit" onClick={this.usersList}>
                USERS LIST
              </Button>
            ) : null}
            {this.props.isLoggedIn ? (
              <Button className={Styles.headerButton} color="inherit" onClick={this.myProfile}>
                MY PROFILE
              </Button>
            ) : null}
            {this.props.isLoggedIn ? (
              <Button className={Styles.headerButton}
                color="inherit"
                onClick={() => this.logOut()}
              >
                LOGOUT
           </Button>
            ) : (
                <Button className={Styles.headerButton}
                  color="inherit"
                  onClick={(e) => this.handleLoginFunc(e)}
                >
                  LOGIN
               </Button>
              )
            }

          </Toolbar>
        </AppBar>
      </div>
    );
  }

  goTolanding = () => {
    history.push("/");
  };
  myProfile = () => {
    history.push("/Profile");
  };

  giftsSend = () => {
    history.push("/GiftsSend");
  };

  giftsReceived = () => {
    history.push("/GiftsReceived");
  };
  usersList = () => {
    history.push("/UsersList");
  };

  logOut = () => {
    localStorage.clear();
    this.props.logout();
    history.push("/");
  };

}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    isLoggedIn: state.login.loginStatus,
    userDetails: state.login.detailsObject
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ login, logout, createUser, openDialog, loginGoogleUser }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Header));
