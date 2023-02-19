import PropTypes from 'prop-types';
import css from 'components/TransactionHistory/TransactionHistory.module.css'

export const TransactionHistory = ({items}) => {
   return <table className={css.transactionHistory}>
  <thead>
    <tr>
      <th className = {css.transactionItem}>Type</th>
      <th className = {css.transactionItem}>Amount</th>
      <th className = {css.transactionItem}>Currency</th>
    </tr>
  </thead>
  <tbody>
  {items.map(item => ( <tr key={item.id}>
      <td className = {css.transactionData}>{item.type}</td>
      <td className = {css.transactionData}>{item.amount}</td>
      <td className = {css.transactionData}>{item.currency}</td>
    </tr>))}
  </tbody>
</table>
}

TransactionHistory.propTypes = {
        id: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired,
  };
  
  export default TransactionHistory;


