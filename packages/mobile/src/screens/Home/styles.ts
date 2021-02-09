import { Platform } from 'react-native';

import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const Title = styled.Text`
  color: #232129;
  font-size: 56px;
  margin-left: 16px;
  margin-top: 64px;
  text-align: center;
`;

export const IntructionsContainer = styled.View`
  align-items: center;
`;

export const InstructionsText = styled.Text`
  color: #232129;
  font-size: 18px;
  text-align: center;
  margin-top: 32px;
`;
