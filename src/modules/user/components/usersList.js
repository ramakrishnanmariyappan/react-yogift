import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { usersDetails } from '../../../actions/user-index';
import ReactVirtualizedTable from '../../common/components/VirtualDom';

function UsersList(props) {
    const { UsersDetails } = useSelector(state => ({
        UsersDetails: state.users.UsersDetails
    }));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(usersDetails());
    }, [dispatch]);
    return (
        <div>
            <ReactVirtualizedTable {...UsersDetails} />
        </div>
    );
}


export default UsersList;