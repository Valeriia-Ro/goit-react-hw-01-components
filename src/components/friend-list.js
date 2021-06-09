import React from "react";
import PropTypes from 'prop-types';
import defaultAvatar from '../components/default-avatar.jpg';

const FriendList = ({friends}) => {
    return (
        <ul class="friend-list">
            {friends.map(({avatar, name, isOnline, id}) => (
                <li class="item"
                    key={id}

                >   
                    <span class="status">{isOnline}</span>
                    <img class="avatar" src={avatar} alt="" width="48" />
                    <p class="name">{name}</p>
                </li>
            ))}
        </ul>
    );
}

FriendList.defaultProps = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: defaultAvatar,
    })
    ) 
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string,
    })
    ).isRequired,
};
  
export default FriendList;