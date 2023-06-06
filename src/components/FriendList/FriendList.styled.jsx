import styled from '@emotion/styled';

export const FriendList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 7px;
    width: 280px;

    margin: 0 auto 50px;
`;

export const FriendItem = styled.li`
    align-items: center;
    column-gap: 10px;
    padding: 10px;

    border-radius: 2px;
`;

export const OnlineStatus = styled.span`
    display: block;
    width: 15px;
    height: 15px;

    background-color: ${props => (props.status ? 'green' : 'red')}; 
    border-radius: 50%;
`;

export const Avatar = styled.img`
    padding: 6px;
    background-color: beige;
    border-radius: 5px;
`;

export const Username = styled.p`
    font-size: 20px;
    font-weight: 500;
`;