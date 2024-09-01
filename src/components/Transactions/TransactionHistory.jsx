import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transaction}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,     // id должен быть строкой и обязательным
      type: PropTypes.string.isRequired,   // type должен быть строкой и обязательным
      amount: PropTypes.string.isRequired, // amount должен быть строкой и обязательным
      currency: PropTypes.string.isRequired, // currency должен быть строкой и обязательным
    })
  ).isRequired,
};

export default TransactionHistory;
