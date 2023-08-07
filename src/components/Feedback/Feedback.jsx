import React from 'react';
import { MainText, BtnList, Btn } from './Feedback.styled';
import PropTypes from 'prop-types';

export default function Feedback({ HandleIncrescent }) {
  return (
    <>
      <MainText> Please leave feedback</MainText>
      <BtnList>
        <Btn onClick={HandleIncrescent} type="button" value={'good'}>
          good
        </Btn>
        <Btn onClick={HandleIncrescent} type="button" value={'neutral'}>
          neutral
        </Btn>
        <Btn onClick={HandleIncrescent} type="button" value={'bad'}>
          bad
        </Btn>
      </BtnList>
    </>
  );
}
Feedback.propTypes = {
    HandleIncrescent: PropTypes.func.isRequired,
}