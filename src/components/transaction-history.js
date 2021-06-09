import React from "react";
import PropTypes from 'prop-types';
import styles from '../styles/transaction-history.module.css';

const TransactionHistory = ({items}) => {
    return (
        <table className={styles.transaction_history}>
            <thead className={styles.head}>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(({id, type, amount, currency}) => (
                     <tr key={id} className={styles.items}>
                        <td className={styles.body_text}>{type}</td>
                        <td className={styles.body_text}>{amount}</td>
                        <td className={styles.body_text}>{currency}</td>
                    </tr>
                ))}
               
               
            </tbody>
        </table>

    )
}


TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    })
    ).isRequired,
};

export default TransactionHistory;