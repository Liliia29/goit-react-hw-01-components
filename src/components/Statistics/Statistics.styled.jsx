import styled from '@emotion/styled';

export const StatisticsSection = styled.section`
    width: 300px;
    margin: 0 auto 50px;
    background-color: #f9f9f9;
    padding-top: 20px;
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

    background-color: #AD7777;
    padding: 16px 0;
    :not(:last-child){
        border-right: 1px solid #CECECE;
    }
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