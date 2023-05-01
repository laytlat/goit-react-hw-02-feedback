import React, { Component } from 'react';

import { Container } from './App.styled';
import { FeedbackBtns } from 'components/FeedbackButtons/FeedbackButtons';
import { Statistics } from 'components/Statistics/Statistics';

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
    return (
      <Container>
        <FeedbackBtns
          addGoodFeedback={this.addGoodFeedback}
          addNeutralFeedback={this.addNeutralFeedback}
          addBadFeedback={this.addBadFeedback}
        ></FeedbackBtns>
        <Statistics
          goodFeedbacks={goodFeedbacks}
          neutralFeedbacks={neutralFeedbacks}
          badFeedbacks={badFeedbacks}
        ></Statistics>
      </Container>
    );
  }
}
