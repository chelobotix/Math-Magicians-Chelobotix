// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const CalcButton = (props) => {
  const { symbol, function1 } = props;
  return (
    <button type="button" onClick={() => function1(symbol)} className="symbol">{symbol}</button>
  );
};

CalcButton.defaultProps = { symbol: '', function1: '' };
CalcButton.propTypes = { symbol: PropTypes.string, function1: PropTypes.func };

export default CalcButton;
