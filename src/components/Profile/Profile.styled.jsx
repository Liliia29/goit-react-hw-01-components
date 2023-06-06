import styled from '@emotion/styled';

export const ProfileWrapper = styled.div`
    width: 300px;
    height: 100%;
    margin: 50px auto;
    padding: 30px 0 0;
    overflow: hidden;

    border-radius: 5px;
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 30px;
`;

export const Avatar = styled.img`
    display: block;
    width: 130px;
    margin-bottom: 35px;

    background-color: aqua;
    border-radius: 50%;
`;

export const Username = styled.p`
    margin-bottom: 10px;
    font-size: 22px;
    font-weight: 600;
`;

export const Tag = styled.p`
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: 600;
    color: black;
`;

export const Location = styled.p`
    font-size: 14px;
    font-weight: 600;
    color: black;
`;

export const Stats = styled.ul`
    display: flex;
    justify-content: space-between;

    border-top: 1px solid skyblue;
    background-color: beige;
`;

export const StatsItem = styled.li`
display: flex;
flex-direction: column;
    align-items: center;
    flex: 1 1 0px;
    gap: 5px;

    padding: 15px 5px;
    :not(:last-child){
        border-right: 1px solid #e8e8e8;
    }

`;

export const Label = styled.span`
display: block;
font-size: 12px;
  font-weight: 600;
  color: black;
`;

export const Quantity = styled.span`
    display: block;
    font-weight: 600;
`;