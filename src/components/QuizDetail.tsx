import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import { Quiz } from "../models/Quiz";

const QuizDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  if (!id) {
    return <div>Invalid Quiz ID</div>;
  }

  const storedQuizzes = localStorage.getItem("quizzes");
  const quizzes: Quiz[] = storedQuizzes ? JSON.parse(storedQuizzes) : [];
  const quizIndex = quizzes.findIndex((quiz) => quiz.id === id);

  if (quizIndex === -1) {
    return <div>Quiz not found</div>;
  }

  const [quiz, setQuiz] = useState<Quiz>(quizzes[quizIndex]);

  const handleQuestionChange = (questionIndex: number, text: string) => {
    const updatedQuestions = [...quiz.questions];
    updatedQuestions[questionIndex].text = text;
    setQuiz({ ...quiz, questions: updatedQuestions });
  };

  const handleAnswerChange = (questionIndex: number, answerIndex: number, text: string) => {
    const updatedQuestions = [...quiz.questions];
    updatedQuestions[questionIndex].answers[answerIndex].text = text;
    setQuiz({ ...quiz, questions: updatedQuestions });
  };

  const handleCorrectAnswerChange = (questionIndex: number, answerIndex: number) => {
    const updatedQuestions = [...quiz.questions];
    updatedQuestions[questionIndex].answers = updatedQuestions[questionIndex].answers.map((answer, idx) => ({
      ...answer,
      isCorrect: idx === answerIndex
    }));
    setQuiz({ ...quiz, questions: updatedQuestions });
  };

  const handleDeleteAnswer = (questionIndex: number, answerIndex: number) => {
    const updatedQuestions = [...quiz.questions];
    updatedQuestions[questionIndex].answers.splice(answerIndex, 1);
    setQuiz({ ...quiz, questions: updatedQuestions });
  };

  const handleAddAnswer = (questionIndex: number) => {
    const updatedQuestions = [...quiz.questions];
    updatedQuestions[questionIndex].answers.push({
      id: uuidv4(),
      text: '',
      isCorrect: false
    });
    setQuiz({ ...quiz, questions: updatedQuestions });
  };

  const handleSave = () => {
    const updatedQuizzes = [...quizzes];
    updatedQuizzes[quizIndex] = quiz;
    localStorage.setItem("quizzes", JSON.stringify(updatedQuizzes));
    navigate(`/`);
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">
        <input
          type="text"
          value={quiz.name}
          onChange={(e) => setQuiz({ ...quiz, name: e.target.value })}
          placeholder="Quiz name"
          className="w-full p-2 border border-gray-300 rounded"
        />
      </h1>
      {quiz.questions.map((question, questionIndex) => (
        <div key={question.id} className="mb-6">
          <h2 className="text-xl mb-2">
            <input
              type="text"
              value={question.text}
              onChange={(e) => handleQuestionChange(questionIndex, e.target.value)}
              placeholder="Question text"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </h2>
          <ul className="space-y-2">
            {question.answers.map((answer, answerIndex) => (
              <li key={answer.id} className="flex items-center mb-2">
                <input
                  type="text"
                  value={answer.text}
                  onChange={(e) => handleAnswerChange(questionIndex, answerIndex, e.target.value)}
                  placeholder="Answer text"
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <button
                  onClick={() => handleCorrectAnswerChange(questionIndex, answerIndex)}
                  className={`ml-2 p-2 rounded ${answer.isCorrect ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
                >
                  {answer.isCorrect ? "Correct" : "Mark as Correct"}
                </button>
                <button
                  onClick={() => handleDeleteAnswer(questionIndex, answerIndex)}
                  className="ml-2 p-2 bg-red-500 text-white rounded"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={() => handleAddAnswer(questionIndex)}
            className="mt-2 p-2 bg-blue-500 text-white rounded"
          >
            Add Answer
          </button>
        </div>
      ))}
      <button
        onClick={handleSave}
        className="mt-4 p-2 bg-blue-500 text-white rounded"
      >
        Save changes
      </button>
    </div>
  );
};

export default QuizDetail;
