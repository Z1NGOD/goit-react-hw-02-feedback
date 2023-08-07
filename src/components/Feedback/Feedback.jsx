import React from 'react';
import { BtnList, Btn } from './Feedback.styled';
import PropTypes from 'prop-types';

export default function Feedback({ handleIncrescent, stateNames }) {
  return (
    <>
      <BtnList>
        {stateNames.map(name => (
          <Btn key={name} onClick={handleIncrescent} type="button" value={name}>
            {name}
          </Btn>
        ))}
      </BtnList>
    </>
  );
}

Feedback.propTypes = {
  handleIncrescent: PropTypes.func.isRequired,
  stateNames: PropTypes.array.isRequired,
};
