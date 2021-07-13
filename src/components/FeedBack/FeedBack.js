import React, { Component } from 'react';
import FeedBackOptions from '../FeedBackOptions';
import Statistics from '../Statistics';
import Section from '../Section';
import s from './FeedBack.module.css';

class FeedBack extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goodFeedBack = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  neutralFeedBack = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  badFeedBack = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    const arrayFeedBack = Object.values(this.state);
    const ttl = arrayFeedBack.reduce((acc, sum) => acc + sum, 0);
    return ttl;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();

    if (this.state.good === 0) {
      return 0;
    }
    return Math.round((this.state.good / total) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div className={s.mainContainer}>
        <Section title="Please leave feedback">
          <FeedBackOptions
            good={this.goodFeedBack}
            neutral={this.neutralFeedBack}
            bad={this.badFeedBack}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      </div>
    );
  }
}

export default FeedBack;
