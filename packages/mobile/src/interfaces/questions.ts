export interface IAlternatives {
  a: string;
  b: string;
  c: string;
  d: string;
  e: string;
}

export interface IQuestions {
  number: number;
  question: string;
  answer: 'a' | 'b' | 'c' | 'd' | 'e' | null;
  correct_answer: 'a' | 'b' | 'c' | 'd' | 'e';
  alternatives: IAlternatives;
}

export interface IQuizResult {
  hits: number;
  message: string;
}

export interface IQuizData {
  questions: IQuestions[];
  isQuizValid: boolean;
  startQuiz: () => void;
  finishQuiz: () => void;
  setIsQuizValid: React.Dispatch<React.SetStateAction<boolean>>;
  setUserQuestionAnswer: (
    questionNumber: number,
    answer: 'a' | 'b' | 'c' | 'd' | 'e',
  ) => void;
  quizResult: IQuizResult;
}
