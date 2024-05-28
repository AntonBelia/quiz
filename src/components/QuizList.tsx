import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PencilIcon, TrashIcon } from '@heroicons/react/16/solid';

import { useLocalStorage } from '../hooks/useLocalStorage';
import { Quiz } from '../models/Quiz';
import { quizzes as initialQuizzes } from '../data';

const QuizList: React.FC = () => {
  const [quizzes, setQuizzes] = useLocalStorage<Quiz[]>('quizzes', initialQuizzes);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleDelete = (id: string) => {
    setQuizzes(quizzes.filter(quiz => quiz.id !== id));
  };

  const filteredQuizzes = quizzes.filter(quiz =>
    quiz.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Quizzes</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search quizzes"
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />
      <ul className="space-y-4">
        {filteredQuizzes.map(quiz => (
          <li key={quiz.id} className="flex items-center justify-between p-4 border border-gray-300 rounded">
            <Link to={`/quiz/${quiz.id}`} className="text-xl">{quiz.name}</Link>
            <div className="flex items-center">
              <button onClick={() => handleDelete(quiz.id)} className="text-red-500 ml-2">
                <TrashIcon className="h-5 w-5" />
              </button>
              <Link to={`/edit/${quiz.id}`} className="text-gray-500 ml-2">
                <PencilIcon className="h-5 w-5" />
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizList;