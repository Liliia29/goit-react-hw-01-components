import styled from '@emotion/styled';

export const StatisticsSection = styled.section`
    width: 360px;
    margin: 0 auto 50px;
`;

export const Title = styled.section`
    margin-bottom: 20px;
    text-align: center;
    text-transform: uppercase;
    font-weight: 600;
    color: gray;
`;

export const StatsList = styled.ul`
    display: flex;
    align-items: center;
`;

export const StatsItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1 1 0px;
    gap: 6px;

    background-color: blueviolet;
    padding: 16px 0;
`;

export const Label = styled.span`
    display: block;
    font-size: 12px;
    font-weight: 600;
    color: white;
`;

export const Percentage = styled.span`
    display: block;
    font-weight: 600;
    color: white;
`;