import Feedback from './Feedback/Feedback';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Statistic from './Statistic/Statistic';
import Section from './Section/Section';
import { Container } from 'ui/ui.styled';
export class App extends Component {
  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrescent = e => {
    const selectedValue = e.target.value;
    this.setState(prevState => ({
      good: selectedValue === 'good' ? prevState.good + 1 : prevState.good,
      neutral:
        selectedValue === 'neutral' ? prevState.neutral + 1 : prevState.neutral,
      bad: selectedValue === 'bad' ? prevState.bad + 1 : prevState.bad,
    }));
  };

  calculatePositivePercentage = () => {
    const { good } = this.state;
    const total = this.state.good + this.state.neutral + this.state.bad;

    if (total !== 0) {
      return ((good / total) * 100).toFixed(2);
    }
    return '0';
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return (
      <Container>
        <Section title="Please leave feedback">
          <Feedback handleIncrescent={this.handleIncrescent} />
        </Section>
        <Section title="Statistics">
          <Statistic
            calculatePositivePercentage={this.calculatePositivePercentage}
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
          />
        </Section>
      </Container>
    );
  }
}
