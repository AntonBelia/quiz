import React from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { Quiz } from '../models/Quiz';

interface LocationState {
  state: {
    score: number;
		time: number;
		total: number;
  };
}

const Result: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const state = location.state as LocationState['state'];
  const [quizzes] = useLocalStorage<Quiz[]>('quizzes', []);
  const quiz = quizzes.find(q => q.id === id);

  if (!quiz) {
    return <div>Quiz not found</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Quiz Result</h1>
      <p>Quiz: {quiz.name}</p>
      <p>Your score: {state.score}</p>
      <p>Total question: {state.total}</p>
      <p>Your time: {state.time} seconds</p>
			<div className="p-2">
	      <Link to="/" className="p-2 bg-blue-500 text-white rounded">Back to quizzes</Link>
			</div>
    </div>
  );
};

export default Result;
