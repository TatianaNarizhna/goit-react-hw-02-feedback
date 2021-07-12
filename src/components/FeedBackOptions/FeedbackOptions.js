import React from 'react';
import PropTypes from 'prop-types';

const FeedBackOptions = ({ good, neutral, bad }) => (
  <div>
    <button type="button" onClick={good}>
      Good
    </button>
    <button type="button" onClick={neutral}>
      Neutral
    </button>
    <button type="button" onClick={bad}>
      Bad
    </button>
  </div>
);

FeedBackOptions.propTypes = {
  good: PropTypes.func.isRequired,
  neutral: PropTypes.func.isRequired,
  bad: PropTypes.func.isRequired,
};

export default FeedBackOptions;
