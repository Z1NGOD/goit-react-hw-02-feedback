import React from 'react';
import { BtnList, Btn } from './Feedback.styled';
import PropTypes from 'prop-types';

export default function Feedback({ handleIncrescent }) {
  const feedbackOptions = ['good', 'neutral', 'bad'];

  return (
    <>
      <BtnList>
        {feedbackOptions.map(option => (
          <Btn
            key={option}
            onClick={handleIncrescent}
            type="button"
            value={option}
          >
            {option}
          </Btn>
        ))}
      </BtnList>
    </>
  );
}

Feedback.propTypes = {
  handleIncrescent: PropTypes.func.isRequired,
};
