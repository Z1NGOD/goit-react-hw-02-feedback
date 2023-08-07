import React, { Children } from 'react';
import { MainText } from './Section.styled';
function Section({ title, children }) {
  return (
    <>
      <MainText>{title}</MainText>
      {children}
    </>
  );
}

export default Section;
