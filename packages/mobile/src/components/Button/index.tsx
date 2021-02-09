import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Label } from './styles';

interface IButtonProps extends TouchableOpacityProps {
  background?: string;
  color?: string;
  children: string;
}

const Button: React.FC<IButtonProps> = ({
  background = '#312e38',
  color = '#fff',
  children,
  ...rest
}) => (
  <Container activeOpacity={0.6} background={background} {...rest}>
    <Label color={color}>{children}</Label>
  </Container>
);

export default Button;
