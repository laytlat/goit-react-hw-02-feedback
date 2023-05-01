import PropTypes from 'prop-types';

import {
  ButtonsContainer,
  ButtonsTitle,
  ButtonsList,
  ButtonsListItem,
  Button,
} from './FeedbackButtons.styled';

export function FeedbackBtns({
  addGoodFeedback,
  addNeutralFeedback,
  addBadFeedback,
}) {
  return (
    <ButtonsContainer>
      <ButtonsTitle>Please leave your feedback</ButtonsTitle>
      <ButtonsList>
        <ButtonsListItem>
          <Button
            type="button"
            onClick={() => {
              addGoodFeedback();
            }}
          >
            Good
          </Button>
        </ButtonsListItem>
        <ButtonsListItem>
          <Button
            type="button"
            onClick={() => {
              addNeutralFeedback();
            }}
          >
            Neutral
          </Button>
        </ButtonsListItem>
        <ButtonsListItem>
          <Button
            type="button"
            onClick={() => {
              addBadFeedback();
            }}
          >
            Bad
          </Button>
        </ButtonsListItem>
      </ButtonsList>
    </ButtonsContainer>
  );
}

FeedbackBtns.propTypes = {
  addGoodFeedback: PropTypes.func.isRequired,
  addNeutralFeedback: PropTypes.func.isRequired,
  addBadFeedback: PropTypes.func.isRequired,
};
