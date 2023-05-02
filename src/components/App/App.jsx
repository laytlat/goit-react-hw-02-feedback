import React, { Component } from 'react';

import { Container } from './App.styled';
import { FeedbackBtns } from 'components/FeedbackButtons/FeedbackButtons';
import { Statistics } from 'components/Statistics/Statistics';
import { Section } from 'components/SectionTitle/Section';
import { Notification } from 'components/Notification/Notification';

export class App extends Component {
  state = {
    goodFeedbacks: 0,
    neutralFeedbacks: 0,
    badFeedbacks: 0,
  };

  addGoodFeedback = () => {
    this.setState(prevState => {
      return {
        goodFeedbacks: prevState.goodFeedbacks + 1,
      };
    });
  };

  addNeutralFeedback = () => {
    this.setState(prevState => {
      return {
        neutralFeedbacks: prevState.neutralFeedbacks + 1,
      };
    });
  };

  addBadFeedback = () => {
    this.setState(prevState => {
      return {
        badFeedbacks: prevState.badFeedbacks + 1,
      };
    });
  };

  render() {
    const { goodFeedbacks, neutralFeedbacks, badFeedbacks } = this.state;
    const totalFeedbacks = goodFeedbacks + neutralFeedbacks + badFeedbacks;
    let positiveFeedbackPercentage = 0;
    if (totalFeedbacks > 0) {
      positiveFeedbackPercentage = Math.round(
        (100 * goodFeedbacks) / totalFeedbacks
      );
    }

    return (
      <Container>
        <Section title="Please leave your feedback">
          <FeedbackBtns
            addGoodFeedback={this.addGoodFeedback}
            addNeutralFeedback={this.addNeutralFeedback}
            addBadFeedback={this.addBadFeedback}
          ></FeedbackBtns>
        </Section>

        <Section title="Statistics">
          {totalFeedbacks > 0 ? (
            <Statistics
              goodFeedbacks={goodFeedbacks}
              neutralFeedbacks={neutralFeedbacks}
              badFeedbacks={badFeedbacks}
              totalFeedbacks={totalFeedbacks}
              positiveFeedbackPercentage={positiveFeedbackPercentage}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </Container>
    );
  }
}