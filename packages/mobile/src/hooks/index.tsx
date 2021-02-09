import React from 'react';

import { QuizProvider } from './quiz';

const AppProvider: React.FC = ({ children }) => (
  <QuizProvider>{children}</QuizProvider>
);

export default AppProvider;
