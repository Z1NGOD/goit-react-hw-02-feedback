import React from 'react'
import PropTypes from 'prop-types'
import { StatisticItem, StatisticList, SecondaryText } from './Statistic.styled';
function Statistic({good,bad,neutral,total,calculatePositivePercentage}) {
  return (
    <>
      <SecondaryText>Statistics</SecondaryText>
      {total !== 0 ? (
        <StatisticList>
          <StatisticItem>good: {good}</StatisticItem>
          <StatisticItem>neutral: {neutral}</StatisticItem>
          <StatisticItem>bad: {bad}</StatisticItem>
          <StatisticItem>total: {total}</StatisticItem>
          <StatisticItem>
            Positive Feedback percentage: {calculatePositivePercentage()}%
          </StatisticItem>
        </StatisticList>
      ) : (
        'there is no statistic given'
      )}
    </>
  );
}

Statistic.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    calculatePositivePercentage: PropTypes.func.isRequired,
}

export default Statistic

