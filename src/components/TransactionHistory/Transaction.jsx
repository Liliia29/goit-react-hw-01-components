import PropTypes from 'prop-types';
import {
    TransactionRow,
    TransactionType,
    GeneralTable,
}  from './TransactionHistory.styled';

export const Transaction = ({type, amount, currency }) => {
    return (
        <TransactionRow>
            <TransactionType>{type}</TransactionType>
            <GeneralTable>{amount}</GeneralTable>
            <GeneralTable>{currency}</GeneralTable>
        </TransactionRow>
    );
};

Transaction.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
};