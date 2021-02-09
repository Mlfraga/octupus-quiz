import { TouchableOpacity } from 'react-native';

import styled from 'styled-components/native';

interface IContainerProps {
  background?: string;
}

export const Container = styled(TouchableOpacity)<IContainerProps>`
  width: 100%;
  height: 42px;

  background: ${props => props.background || '#312e38'};
  border-radius: 8px;

  justify-content: center;
  align-items: center;
  margin-top: 8px;
`;

interface ILabelProps {
  color?: string;
}

export const Label = styled.Text<ILabelProps>`
  color: ${props => props.color || '#fff'};
  font-size: 18px;
`;
