import PropTypes from 'prop-types';

import {
  ButtonsContainer,
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
