import React from "react";
import PropTypes from 'prop-types';
import defaultAvatar from '../components/default-avatar.jpg';
import styles from '../styles/friend-list.module.css';

const FriendList = ({friends}) => {
    return (
        <ul className={styles.friend_list}>
            {friends.map(({avatar, name, isOnline, id}) => {
                const status = isOnline ? styles.isOnline : styles.isOffline;
               
                return(
                
                <li className={styles.item}
                    key={id}

                >   
                    <span className={status}>{isOnline}</span>
                    <img className={styles.avatar} src={avatar} alt="" width="48" />
                    <p className={styles.name}>{name}</p>
                </li>
            )})}
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