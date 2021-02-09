import React, { createContext, useCallback, useContext, useState } from 'react';

import { IQuestions, IQuizResult, IQuizData } from '../interfaces/questions';
import staticQuestions from '../mocks/questions';

const AuthContext = createContext<IQuizData>({} as IQuizData);

export const QuizProvider: React.FC = ({ children }) => {
  const [questions, setQuestions] = useState<IQuestions[]>(staticQuestions);
  const [isQuizValid, setIsQuizValid] = useState<boolean>(false);
  const [quizResult, setQuizResult] = useState<IQuizResult>({
    hits: 0,
    message: 'Ooops nada bem, continue tentando.',
  });

  const startQuiz = useCallback(() => {
    setIsQuizValid(true);

    global.setTimeout(() => {
      setIsQuizValid(false);
    }, 600000);
  }, []);

  const setUserQuestionAnswer = useCallback(
    (questionNumber: number, answer: 'a' | 'b' | 'c' | 'd' | 'e') => {
      const userQuestionIndex = questions.findIndex(
        question => question.number === questionNumber,
      );

      if (userQuestionIndex < 0) {
        return;
      }

      const newQuestions = questions;

      newQuestions[userQuestionIndex].answer = answer;

      setQuestions(newQuestions);
    },
    [questions, setQuestions],
  );

  const finishQuiz = useCallback(() => {
    let counter = 0;

    questions.forEach(question => {
      if (question.answer === question.correct_answer) {
        counter++;
      }
    });

    let message;

    if (counter === 15) {
      message = 'Muito bem, você conseguiu acertar todas as questões.';
    } else if (counter < 15 && counter >= 10) {
      message = 'Quase lá, tente novamente.';
    } else {
      message = 'Ooops nada bem, continue tentando.';
    }

    setQuizResult({ hits: counter, message });

    setQuestions([
      {
        number: 1,
        question:
          'Normalmente, quantos litros de sangue uma pessoa tem? Em média, quantos são retirados numa doação de sangue?',
        alternatives: {
          a: 'Tem entre 2 a 4 litros. São retirados 450 mililitros',
          b: 'Tem entre 4 a 6 litros. São retirados 450 mililitros',
          c: 'Tem 10 litros. São retirados 2 litros',
          d: 'Tem 7 litros. São retirados 1,5 litros',
          e: 'Tem 0,5 litros. São retirados 0,5 litros',
        },
        correct_answer: 'b',
        answer: null,
      },
      {
        number: 2,
        question: 'De quem é a famosa frase “Penso, logo existo”?',
        alternatives: {
          a: 'Platão',
          b: 'Galileu Galilei',
          c: 'Descartes',
          d: 'Sócrates',
          e: 'Francis Bacon',
        },
        correct_answer: 'c',
        answer: null,
      },
      {
        number: 3,
        question: 'De onde é a invenção do chuveiro elétrico?',
        alternatives: {
          a: 'França',
          b: 'Inglaterra',
          c: 'Brasil',
          d: 'Austrália',
          e: 'Itália',
        },
        correct_answer: 'c',
        answer: null,
      },
      {
        number: 4,
        question: 'Quais o menor e o maior país do mundo?',
        alternatives: {
          a: 'Vaticano e Rússia',
          b: 'Nauru e China',
          c: 'Mônaco e Canadá',
          d: 'Malta e Estados Unidos',
          e: 'São Marino e Índia',
        },
        correct_answer: 'a',
        answer: null,
      },
      {
        number: 5,
        question:
          'Qual o nome do presidente do Brasil que ficou conhecido como Jango?',
        alternatives: {
          a: 'Jânio Quadros',
          b: 'Jacinto Anjos',
          c: 'Getúlio Vargas',
          d: 'João Figueiredo',
          e: 'João Goulart',
        },
        correct_answer: 'e',
        answer: null,
      },
      {
        number: 6,
        question: 'Qual o livro mais vendido no mundo a seguir à Bíblia?',
        alternatives: {
          a: 'O Senhor dos Anéis',
          b: 'Dom Quixote',
          c: 'O Pequeno Príncipe',
          d: 'Ela, a Feiticeira',
          e: 'Um Conto de Duas Cidades',
        },
        correct_answer: 'b',
        answer: null,
      },
      {
        number: 7,
        question: 'Quantas casas decimais tem o número pi?',
        alternatives: {
          a: 'Duas',
          b: 'Centenas',
          c: 'Infinitas',
          d: 'Vinte',
          e: 'Milhares',
        },
        correct_answer: 'c',
        answer: null,
      },
      {
        number: 8,
        question:
          'Atualmente, quantos elementos químicos a tabela periódica possui?',
        alternatives: {
          a: '113',
          b: '109',
          c: '108',
          d: '118',
          e: '92',
        },
        correct_answer: 'd',
        answer: null,
      },
      {
        number: 9,
        question:
          'Quais os países que têm a maior e a menor expectativa de vida do mundo?',
        alternatives: {
          a: 'Japão e Serra Leoa',
          b: 'Austrália e Afeganistão',
          c: 'Itália e Chade',
          d: 'Brasil e Congo',
          e: 'Estados Unidos e Angola',
        },
        correct_answer: 'a',
        answer: null,
      },
      {
        number: 10,
        question: 'O que a palavra legend significa em português?',
        alternatives: {
          a: 'Legenda',
          b: 'Conto',
          c: 'História',
          d: 'Lenda',
          e: 'Legendário',
        },
        correct_answer: 'd',
        answer: null,
      },
      {
        number: 11,
        question: 'Qual o número mínimo de jogadores numa partida de futebol?',
        alternatives: {
          a: '8',
          b: '10',
          c: '9',
          d: '5',
          e: '7',
        },
        correct_answer: 'e',
        answer: null,
      },
      {
        number: 12,
        question: 'Quem pintou "Guernica"?',
        alternatives: {
          a: 'Paul Cézanne',
          b: 'Pablo Picasso',
          c: 'Diego Rivera',
          d: 'Tarsila do Amaral',
          e: 'Salvador Dalí',
        },
        correct_answer: 'b',
        answer: null,
      },
      {
        number: 13,
        question: 'Quanto tempo a luz do Sol demora para chegar à Terra?',
        alternatives: {
          a: '12 minutos',
          b: '1 dia',
          c: '12 horas',
          d: '8 minutos',
          e: 'segundos',
        },
        correct_answer: 'd',
        answer: null,
      },
      {
        number: 14,
        question:
          'Qual a tradução da frase “Fabiano cogió su saco antes de salir”?',
        alternatives: {
          a: 'Fabiano coseu seu paletó antes de sair',
          b: 'Fabiano fechou o saco antes de sair',
          c: 'Fabiano pegou seu paletó antes de sair',
          d: 'Fabiano cortou o saco antes de cair',
          e: 'Fabiano rasgou seu paletó antes de cair',
        },
        correct_answer: 'c',
        answer: null,
      },

      {
        number: 15,
        question: 'Qual a nacionalidade de Che Guevara?',
        alternatives: {
          a: 'Cubana',
          b: 'Peruana',
          c: 'Panamenha',
          d: 'Boliviana',
          e: 'Argentina',
        },
        correct_answer: 'e',
        answer: null,
      },
    ]);
  }, [questions, quizResult]);

  return (
    <AuthContext.Provider
      value={{
        questions,
        startQuiz,
        isQuizValid,
        setUserQuestionAnswer,
        setIsQuizValid,
        quizResult,
        finishQuiz,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useQuiz(): IQuizData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider.');
  }

  return context;
}
