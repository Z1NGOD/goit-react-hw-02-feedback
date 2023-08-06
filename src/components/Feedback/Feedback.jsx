import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'ui/ui.styled';
import {
  MainText,
  BtnList,
  Btn,
  SecondaryText,
  StatisticList,
  StatisticItem,
} from './Feedback.styled';
export default class Feedback extends Component {
  static propTypes = {
    prop: PropTypes.object,
  };

  static secondPropTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  };
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  HandleIncrescent = e => {
    const selectedValue = e.target.value;
    this.setState(prevState => ({
      good: selectedValue === 'good' ? prevState.good + 1 : prevState.good,
      neutral:
        selectedValue === 'neutral' ? prevState.neutral + 1 : prevState.neutral,
      bad: selectedValue === 'bad' ? prevState.bad + 1 : prevState.bad,
    }));
  };
  calculatePositivePercentage = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    if (total !== 0) {
      return ((good / total) * 100).toFixed(2);
    }
    return '0';
  };
  render() {
    const { good, neutral, bad } = this.state;

    return (
      <Container>
        <MainText> Please leave feedback</MainText>
        <BtnList>
          <Btn onClick={this.HandleIncrescent} type="button" value={'good'}>
            good
          </Btn>
          <Btn onClick={this.HandleIncrescent} type="button" value={'neutral'}>
            neutral
          </Btn>
          <Btn onClick={this.HandleIncrescent} type="button" value={'bad'}>
            bad
          </Btn>
        </BtnList>
        <SecondaryText>Statistics</SecondaryText>
        <StatisticList>
          <StatisticItem>good: {good}</StatisticItem>
          <StatisticItem>neutral: {neutral}</StatisticItem>
          <StatisticItem>bad: {bad}</StatisticItem>
          <StatisticItem>total: {good + neutral + bad}</StatisticItem>
          <StatisticItem>
            Positive Feedback percentage:{this.calculatePositivePercentage()}%
          </StatisticItem>
        </StatisticList>
      </Container>
    );
  }
}
