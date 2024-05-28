import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { Question } from "../models/Question";
import { Answer } from "../models/Answer";

interface QuizQuestionFormProps {
  question: Question;
  setQuestion: (question: Question) => void;
  onDelete: () => void;
}

const QuizQuestionForm: React.FC<QuizQuestionFormProps> = ({ question, setQuestion, onDelete }) => {
  const [newAnswer, setNewAnswer] = useState<string>('');

  const addAnswer = () => {
    const answer: Answer = { id: uuidv4(), text: newAnswer, isCorrect: false };
    setQuestion({ ...question, answers: [...question.answers, answer] });
    setNewAnswer('');
  };

  const updateAnswer = (id: string, text: string) => {
    setQuestion({
      ...question,
      answers: question.answers.map(a => a.id === id ? { ...a, text } : a)
    });
  };

  const deleteAnswer = (id: string) => {
    setQuestion({ ...question, answers: question.answers.filter(a => a.id !== id) });
  };

  const setCorrectAnswer = (index: number) => {
    setQuestion({
      ...question,
      correctAnswer: question.answers[index].id,
      answers: question.answers.map((answer, idx) => ({ ...answer, isCorrect: idx === index }))
    });
  };

  return (
    <div className="mb-6 p-4 border border-gray-300 rounded">
      <input
        type="text"
        value={question.text}
        onChange={(e) => setQuestion({ ...question, text: e.target.value })}
        placeholder="Question text"
        className="w-full p-2 mb-2 border border-gray-300 rounded"
      />
      {question.answers.map((answer, index) => (
        <div key={answer.id} className="flex items-center mb-2">
          <input
            type="text"
            value={answer.text}
            onChange={(e) => updateAnswer(answer.id, e.target.value)}
            placeholder="Answer text"
            className="w-full p-2 border border-gray-300 rounded"
          />
          <label className="ml-2">
            <input
              type="radio"
              checked={answer.isCorrect}
              onChange={() => setCorrectAnswer(index)}
              className="mr-1"
            />
            Correct
          </label>
          <button onClick={() => deleteAnswer(answer.id)} className="ml-2 p-2 bg-red-500 text-white rounded">
            Delete
          </button>
        </div>
      ))}
      <div className="flex">
        <input
          type="text"
          value={newAnswer}
          onChange={(e) => setNewAnswer(e.target.value)}
          placeholder="New answer text"
          className="w-full p-2 border border-gray-300 rounded mr-2"
        />
        <button onClick={addAnswer} className="p-2 bg-blue-500 text-white rounded">
          Add Answer
        </button>
      </div>
      <button onClick={onDelete} className="mt-4 p-2 bg-red-500 text-white rounded">
        Delete Question
      </button>
    </div>
  );
};

export default QuizQuestionForm;
