import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { usersDetails } from '../../../actions/user-index';
import ReactVirtualizedTable from '../../common/components/VirtualDom';
import { Redirect } from "react-router-dom";
import { adminEmail } from "../../../config/constants";

function UsersList(props) {
    const { UsersDetails,userDetails, isLoggedIn } = useSelector(state => ({
        UsersDetails: state.users.UsersDetails,
		userDetails: state.login.detailsObject,
		isLoggedIn: state.login.loginStatus
    }));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(usersDetails());
    }, [dispatch]);
    return (
        <div>
		{(isLoggedIn && adminEmail.includes(userDetails.email)) ? <ReactVirtualizedTable {...UsersDetails} /> : 
		<Redirect to="/" />}
        </div>
    );
}


export default UsersList;