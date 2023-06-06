import styled from '@emotion/styled';

export const TransactionsTable = styled.table`
    min-width: 450px;
    margin: 0 auto 50px;
    border-collapse: collapse;
    border-radius: 5px;
    overflow: hidden;
`;

export const TableHend = styled.thead`
    height: 25px;
    tr{
    background-color: #009879;
    color: #ffffff;
    }
`;

export const TableBody = styled.tbody`
    tr{
        border-bottom: 1px solid #dddddd;
    }

    tr:nth-of-type(even){
        background-color: #f5f5f5;
    }

    tr:last-of-type{
        border-bottom: 2px solid #009879;
    }

    tr:hover{
       color: #00bf99;
    }
`;

export const TransactionRow = styled.tr`
    text-align: center;
`;

export const HendTitles = styled.th`
    text-transform: capitalize;
    padding: 13px 15px;
`;

export const TransactionType = styled.td`
    text-transform: capitalize;
    padding: 12px 15px;
    width: calc(100% / 3);
`;

export const GeneralTable = styled.td`
    padding: 12px 15px;
    width: calc(100% / 3);
`;