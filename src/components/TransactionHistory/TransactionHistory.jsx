import PropTypes from 'prop-types';
import { Transaction } from './Transaction'
import {
    TransactionsTable,
    TableHend,
    TransactionRow,
    HendTitles,
    TableBody,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
    return (
        <TransactionsTable>
            <TableHend>
                <TransactionRow>
                    <HendTitles>Type</HendTitles>
                    <HendTitles>Amount</HendTitles>
                    <HendTitles>Currency</HendTitles>
                </TransactionRow>
            </TableHend>
            <TableBody>
                {items.map(({type, amount, currency, id}) =>{
                    return( 
                        <Transaction
                        key={id}
                        type={type}
                        amount={amount}
                        currency={currency}
                        />
                    );
                })}
            </TableBody>
        </TransactionsTable>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
        }).isRequired
    ).isRequired, 
};