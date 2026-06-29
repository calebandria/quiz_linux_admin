import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.scss';
import App from './App';

import { ThemesProvider } from './contexts/themes.context';
import { QuestionsProvider } from './contexts/questions.context';
import { AnswersProvider } from './contexts/answers.context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemesProvider>
        <QuestionsProvider>
          <AnswersProvider>
            <App />
          </AnswersProvider>
        </QuestionsProvider>
      </ThemesProvider>
    </BrowserRouter>
  </React.StrictMode>
);
