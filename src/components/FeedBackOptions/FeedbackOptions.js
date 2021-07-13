import React from 'react';
import PropTypes from 'prop-types';
import s from './Feedback.module.css';

const FeedBackOptions = ({ good, neutral, bad }) => (
  <div className={s.buttonContainer}>
    <button type="button" className={s.button} onClick={good}>
      Good
    </button>
    <button type="button" className={s.button} onClick={neutral}>
      Neutral
    </button>
    <button type="button" className={s.button} onClick={bad}>
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
