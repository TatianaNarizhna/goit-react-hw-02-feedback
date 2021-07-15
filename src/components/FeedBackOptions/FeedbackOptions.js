import React from 'react';
import PropTypes from 'prop-types';
import s from './Feedback.module.css';

const FeedBackOptions = ({ feedback, onGiveFeedback }) => {
  return (
    <button
      type="button"
      className={s.button}
      data-feedback={feedback}
      onClick={onGiveFeedback}
    >
      {feedback}
    </button>
  );
};

const LeaveFeedDack = ({ options, onGiveFeedback }) => {
  return (
    <div className={s.buttonContainer}>
      {options.map(option => (
        <FeedBackOptions
          feedback={option}
          onGiveFeedback={onGiveFeedback}
          key={option.toString()}
        />
      ))}
    </div>
  );
};

FeedBackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onGiveFeedback: PropTypes.func.isRequired,
};

export default LeaveFeedDack;
