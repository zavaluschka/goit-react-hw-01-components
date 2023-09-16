import PropTypes from 'prop-types';
import css from './Transaction.module.css';
export const Transaction = ({ items }) => {
  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => { return(
          <tr key={id} type={type}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>)
        })}
      </tbody>
    </table>
  );
};

Transaction.propTypes = {

  transactions: PropTypes.arrayOf(
    PropTypes.shape({

      id:PropTypes.string.isRequired,
      type:PropTypes.string.isRequired,
       amount:PropTypes.string.isRequired,
       currency: PropTypes.string.isRequired
    }
    )
  )
}