import { Platform } from 'react-native';

import styled, { css } from 'styled-components/native';

interface IAlternativeTextProps {
  selected: boolean;
}

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 0 22px ${Platform.OS === 'android' ? 150 : 40}px;
  background-color: #fff;
`;

export const ImageContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 64px;
  width: 95%;
  height: 30%;
  border: solid 1px #312e38;
  border-radius: 8px;
`;

export const QuestionImage = styled.Image`
  width: 95%;
  height: 30%;
`;

export const QuestionText = styled.Text`
  color: #232129;
  font-size: 16px;
  margin-top: 32px;
  margin-bottom: 32px;
`;

export const QuestionContainer = styled.View`
  margin-top: 32px;
  width: 100%;
`;

export const AlternativeText = styled.Text<IAlternativeTextProps>`
  color: #232129;
  font-size: 16px;
  margin-top: 12px;

  ${props =>
    props.selected &&
    css`
      color: #15c145;
    `}
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  margin-top: 56px;
  max-width: 100%;
`;

export const InstructionsText = styled.Text`
  color: #232129;
  font-size: 18px;
  text-align: center;
  margin-top: 32px;
`;

export const ResultBox = styled.View`
  margin-top: 64px;
  margin-bottom: 64px;
  width: 232px;
  height: 232px;
  border-radius: 32px;
  background-color: #15c145;
  align-items: center;
  justify-content: space-around;
`;

export const ResutlTitleText = styled.Text`
  color: #232129;
  font-size: 26px;
  text-align: center;
`;

export const ResultText = styled.Text`
  color: #232129;
  font-size: 126px;
  text-align: center;
`;

export const MessageText = styled.Text`
  color: #232129;
  font-size: 26px;
  text-align: center;
  margin-bottom: 64px;
`;
