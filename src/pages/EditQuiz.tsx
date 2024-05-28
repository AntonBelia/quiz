import React from 'react';
import { useParams } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { Quiz } from '../models/Quiz';
import QuizDetail from '../components/QuizDetail';

const EditQuiz: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [quizzes] = useLocalStorage<Quiz[]>('quizzes', []);
  const quiz = quizzes.find(q => q.id === id);

  if (!quiz) {
    return <div>Quiz not found</div>;
  }

  return (
    <div className="p-4">
      <QuizDetail />
    </div>
  );
};

export default EditQuiz;
