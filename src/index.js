// Code Goes Here
import React from 'react';
import PropTypes from 'prop-types';

export default class Order extends React.Component {
  render() {
    return (

    )
  }
}

Order.defaultProps = {
  cone: true,
  size: 'regular'
}

Order.propTypes = {
  cone: PropTypes.bool,
  size: PropTypes.string,
  // scoops: PropTypes.array.isRequired,
  scoops: PropTypes.arrayOf(PropTypes.string).isRequired,
  // orderInfo: PropTypes.object.isRequired
  orderInfo: PropTypes.shape({
    customerName: PropTypes.string.isRequired,
    orderedAt: PropTypes.number.isRequired
  }).isRequired
}
