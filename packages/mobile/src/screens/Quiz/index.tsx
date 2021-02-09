import React, { useCallback, useMemo, useState } from 'react';
import {
  Platform,
  KeyboardAvoidingView,
  ScrollView,
  View,
  Text,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';

import Button from '../../components/Button';
import { useQuiz } from '../../hooks/quiz';

import {
  Container,
  ImageContainer,
  QuestionText,
  QuestionContainer,
  AlternativeText,
  ButtonsContainer,
  ResutlTitleText,
  ResultText,
  ResultBox,
  MessageText,
} from './styles';

const Quiz: React.FC = () => {
  const navigation = useNavigation();

  const {
    questions,
    setUserQuestionAnswer,
    quizResult,
    setIsQuizValid,
    isQuizValid,
    finishQuiz,
  } = useQuiz();

  const [questionNumber, setQuestionNumber] = useState<number>(1);
  const [selectedAlternative, setSelectedAlternative] = useState<
    'a' | 'b' | 'c' | 'd' | 'e' | null
  >(null);

  const currentQuestion = useMemo(() => {
    const newQuestion = questions.find(
      question => question.number === questionNumber,
    );

    if (newQuestion) {
      setSelectedAlternative(newQuestion.answer);
    }

    return newQuestion;
  }, [questions, questionNumber]);

  const handleSelectAlternative = useCallback(
    (alternative: 'a' | 'b' | 'c' | 'd' | 'e') => {
      setSelectedAlternative(alternative);

      setUserQuestionAnswer(questionNumber, alternative);
    },
    [questionNumber],
  );

  const handlePreviousQuestion = useCallback(() => {
    const previousQuestionNumber = questionNumber - 1;

    setQuestionNumber(previousQuestionNumber);

    setSelectedAlternative(null);
  }, [questionNumber]);

  const handleNextQuestion = useCallback(() => {
    const nextQuestionNumber = questionNumber + 1;

    setQuestionNumber(nextQuestionNumber);

    setSelectedAlternative(null);
  }, [questionNumber]);

  const handleFinishQuiz = useCallback(() => {
    finishQuiz();

    setIsQuizValid(false);
  }, []);

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
        {isQuizValid ? (
          <Container>
            <ImageContainer>
              <Text>Image</Text>
            </ImageContainer>

            <QuestionContainer>
              <QuestionText>{`${questionNumber}. ${currentQuestion?.question}`}</QuestionText>

              <AlternativeText
                onPress={() => handleSelectAlternative('a')}
                selected={
                  currentQuestion?.answer === 'a' || selectedAlternative === 'a'
                }
              >{`a. ${currentQuestion?.alternatives.a}`}</AlternativeText>
              <AlternativeText
                onPress={() => handleSelectAlternative('b')}
                selected={selectedAlternative === 'b'}
              >{`b. ${currentQuestion?.alternatives.b}`}</AlternativeText>
              <AlternativeText
                onPress={() => handleSelectAlternative('c')}
                selected={
                  currentQuestion?.answer === 'c' || selectedAlternative === 'c'
                }
              >{`c. ${currentQuestion?.alternatives.c}`}</AlternativeText>
              <AlternativeText
                onPress={() => handleSelectAlternative('d')}
                selected={
                  currentQuestion?.answer === 'd' || selectedAlternative === 'd'
                }
              >{`d. ${currentQuestion?.alternatives.d}`}</AlternativeText>
              <AlternativeText
                onPress={() => handleSelectAlternative('e')}
                selected={
                  currentQuestion?.answer === 'e' || selectedAlternative === 'e'
                }
              >{`e. ${currentQuestion?.alternatives.e}`}</AlternativeText>
            </QuestionContainer>

            <ButtonsContainer>
              {questionNumber !== 1 && (
                <View style={{ width: 160, marginRight: 16 }}>
                  <Button onPress={handlePreviousQuestion}>
                    Pergunta anterior
                  </Button>
                </View>
              )}

              {questionNumber !== 15 && (
                <View style={{ width: 160 }}>
                  <Button onPress={handleNextQuestion}>Próxima pergunta</Button>
                </View>
              )}

              {questionNumber === 15 && (
                <View style={{ width: 160 }}>
                  <Button onPress={handleFinishQuiz}>Finalizar quiz</Button>
                </View>
              )}
            </ButtonsContainer>
          </Container>
        ) : (
          <Container>
            <ResultBox>
              <ResutlTitleText>Total de acertos</ResutlTitleText>
              <ResultText>{quizResult.hits}</ResultText>
            </ResultBox>
            <MessageText>{quizResult.message}</MessageText>

            <Button onPress={() => navigation.navigate('Home')}>
              Tentar novamente
            </Button>
          </Container>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Quiz;
