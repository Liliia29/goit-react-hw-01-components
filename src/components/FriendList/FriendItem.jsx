import PropTypes from 'prop-types';
import {
    FriendItem,
    OnlineStatus,
    Username,
    Avatar,
} from './FriendList.styled';

export const FriendListItem = ({ avatar, username, isOnline}) => {
    return (
        <FriendItem>
            <OnlineStatus status={isOnline}/>
            <Avatar src={avatar} alt="User avatar" width="48"/>
            <Username>{username}</Username>
        </FriendItem>
    );
};

FriendListItem.propTypes = {
    username: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
};