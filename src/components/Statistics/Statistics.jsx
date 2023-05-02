import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Notification } from 'components/Notification/Notification';

import {
  StatisticsContainer,
  StatisticsList,
  StatisticsListItem,
  StatisticsText,
} from './Statistics.styled';

export class Statistics extends Component {
  render() {
    const {
      goodFeedbacks,
      neutralFeedbacks,
      badFeedbacks,
      totalFeedbacks,
      positiveFeedbackPercentage,
    } = this.props;

    return (
      <StatisticsContainer>
        <StatisticsList>
          <StatisticsListItem>
            <StatisticsText>Good: {goodFeedbacks}</StatisticsText>
          </StatisticsListItem>
          <StatisticsListItem>
            <StatisticsText>Neutral: {neutralFeedbacks}</StatisticsText>
          </StatisticsListItem>
          <StatisticsListItem>
            <StatisticsText>Bad: {badFeedbacks}</StatisticsText>
          </StatisticsListItem>
          <StatisticsListItem>
            <StatisticsText>Total: {totalFeedbacks}</StatisticsText>
          </StatisticsListItem>
          <StatisticsListItem>
            <StatisticsText>
              Positive feedback: {positiveFeedbackPercentage} %
            </StatisticsText>
          </StatisticsListItem>
        </StatisticsList>
      </StatisticsContainer>
    );
  }
}

Statistics.propTypes = {
  goodFeedbacks: PropTypes.number.isRequired,
  neutralFeedbacks: PropTypes.number.isRequired,
  badFeedbacks: PropTypes.number.isRequired,
};
