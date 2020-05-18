import React, { Component } from 'react'
import { connect } from "react-redux";
import Profile from '../components/profile'
import { Redirect } from 'react-router-dom';
import { userDetails } from '../../../actions/user-index';

export class ProfileContainer extends Component {
    componentDidMount() {
        if (this.props.detailsObject)
            this.props.userDetails(this.props.detailsObject.id)
    }
    render() {
        if (this.props.isLoggedIn) {
            return <Profile detailsObject={{ ...this.props.detailsObject, balance_points: this.props.user.balance_points }} />
        } else {
            return <Redirect to="/" />
        }
    }
}


const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.login.loginStatus,
        detailsObject: state.login.detailsObject,
        user: state.users.UserDetails
    }
}

export default connect(mapStateToProps, { userDetails })(ProfileContainer)

