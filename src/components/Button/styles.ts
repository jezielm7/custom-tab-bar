/* eslint-disable prettier/prettier */
import styled from 'styled-components/native';

interface ButtonProps {
  color: string;
  focused: boolean;
}

export const Container = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 30px;

  margin-bottom: 20px;
  align-items: center;
  justify-content: center;
`;
