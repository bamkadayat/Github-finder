import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({user:{login, avatar_url}}) => {
    return (
        <div className="card text-center">
            <img className="round-img" src={avatar_url} style={{width:'100px'}} alt=""/>
            <h3>{login}</h3>
            <div>
                <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">More</Link>
            </div>
        </div>
    );
}
UserItem.propsTypes = {
 user:PropTypes.object.isRequired
}
export default UserItem
