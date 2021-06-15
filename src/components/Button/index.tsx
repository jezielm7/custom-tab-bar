/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import Icon from 'react-native-vector-icons/Entypo';

import { Container } from './styles';

interface ButtonProps {
  size: number;
  focused: boolean;
}

function Button({ size, focused }: ButtonProps) {
  return (
    <Container style={{ backgroundColor: focused ? '#6600ff' : '#7b29f6' }}>
      <Icon name="plus" size={size} color="#fff" />
    </Container>
  );
}

export default Button;
