import PropTypes from 'prop-types';
import { FriendListItem } from './FriendItem';
import { FriendList } from './FriendList.styled';

export const FriendsList =({friends}) => {
    return (
        <FriendList>
            {friends.map(({id, avatar, name, isOnline}) => {
                return (
                    <FriendListItem 
                    key={id}
                    avatar={avatar}
                    username={name}
                    isOnline={isOnline}
                    />
                );
            })}
        </FriendList>
    );
};

FriendsList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        }).isRequired
    ).isRequired, 
};