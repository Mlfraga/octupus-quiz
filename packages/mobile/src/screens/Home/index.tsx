import React, { useCallback } from 'react';
import { Platform, KeyboardAvoidingView, ScrollView, View } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button';
import { useQuiz } from '../../hooks/quiz';

import {
  Container,
  Title,
  InstructionsText,
  IntructionsContainer,
} from './styles';

const Home: React.FC = () => {
  const { startQuiz } = useQuiz();
  const navigation = useNavigation();

  const handleTouchStartButton = useCallback(() => {
    startQuiz();

    navigation.navigate('Quiz');
  }, [startQuiz]);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled
    >
      <ScrollView
        contentContainerStyle={{ flex: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <Container style={{ backgroundColor: '#fff' }}>
          <Title>Quiz</Title>
          <IntructionsContainer>
            <InstructionsText>
              - Esse quiz é composto por 15 questões de conhecimentos gerais.
            </InstructionsText>
            <InstructionsText>
              - Você terá dez minutos para completar o quiz.
            </InstructionsText>
            <InstructionsText>
              - Após 10 minutos do início ou assim que o botão de finalização do
              quiz for tocado o resultado será mostrado na tela.
            </InstructionsText>
          </IntructionsContainer>

          <View style={{ width: 236, marginTop: 32 }}>
            <Button onPress={handleTouchStartButton}>Iniciar</Button>
          </View>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Home;
