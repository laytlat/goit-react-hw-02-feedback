import PropTypes from 'prop-types';

import {
  StatisticsContainer,
  StatisticsTitle,
  StatisticsList,
  StatisticsListItem,
  StatisticsText,
} from './Statistics.styled';

export function Statistics({ goodFeedbacks, neutralFeedbacks, badFeedbacks }) {
  return (
    <StatisticsContainer>
      <StatisticsTitle>Statistics</StatisticsTitle>
      <StatisticsList>
        <StatisticsListItem>
          <StatisticsText>good: {goodFeedbacks}</StatisticsText>
        </StatisticsListItem>
        <StatisticsListItem>
          <StatisticsText>neutral: {neutralFeedbacks}</StatisticsText>
        </StatisticsListItem>
        <StatisticsListItem>
          <StatisticsText>bad: {badFeedbacks}</StatisticsText>
        </StatisticsListItem>
      </StatisticsList>
    </StatisticsContainer>
  );
}

Statistics.propTypes = {
  goodFeedbacks: PropTypes.number.isRequired,
  neutralFeedbacks: PropTypes.number.isRequired,
  badFeedbacks: PropTypes.number.isRequired,
};
