import styled from '@emotion/styled';

const BtnList = styled.ul`
  display: flex;
  gap: 15px;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 20px;
`;

const Btn = styled.button`
  background-color: #2196f3;
  color: white;
  border: none;
  padding: 12px 20px;
  font-size: 18px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1976d2;
  }
`;

export { BtnList, Btn};
