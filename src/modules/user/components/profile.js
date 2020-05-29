import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import Styles from '../../../assets/css/Profile.module.css';
import Paper from '@material-ui/core/Paper';

class Profile extends Component {
  render() {
    let {
      email,
      first_name,
      last_name,
      socialProfileLink,
      picture,
      balance_points
    } = this.props.detailsObject;
    return (
      <>
        <div className={Styles.profileHeader}>
          <img
            className={Styles.profileImg}
            alt="profile"
            src={picture}
          />
        </div>
        <div className={Styles.profileContent}>
          <Grid container spacing={0}>
            <Grid item xs={4}>
              <label className={Styles.label}>Name</label>
              <label className={Styles.label}>User Id</label>
              {socialProfileLink ? 
              <label className={Styles.label}>Social Profile Contact</label>
              : null }
              <label className={Styles.label}>Balance Points</label>
            </Grid>
            <Grid item xs={8}>
              <Paper className={Styles.profileValues}>{first_name} {last_name}</Paper>
              <Paper className={Styles.profileValues}>{email}</Paper>
              {socialProfileLink ? 
              <Paper className={Styles.profileValues}>{socialProfileLink}</Paper>
              : null }
              <Paper className={Styles.profileValues}>{balance_points} Points</Paper>
            </Grid>
          </Grid>
        </div>
      </>
    );
  }
}

export default Profile;
