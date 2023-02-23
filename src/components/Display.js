import PropTypes from 'prop-types';

const Display = (props) => {
  const { calcObj } = props;
  // eslint-disable-next-line react/prop-types
  const { total, next, operation } = calcObj;
  if (operation === null && next === null && total === null) {
    return (
      <div className="display">
        <p className="display">0</p>
      </div>
    );
  }
  return (
    <div className="display">
      {operation === null ? <p className="display">{total}</p> : <p className="display">{next}</p>}
    </div>
  );
};

Display.defaultProps = {
  calcObj: {},
  total: null,
  next: null,
  operation: null,
};
Display.propTypes = {
  calcObj: PropTypes.shape({}),
  total: PropTypes.string,
  next: PropTypes.string,
  operation: PropTypes.string,
};

export default Display;
