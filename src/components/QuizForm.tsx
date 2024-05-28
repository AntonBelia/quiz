import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import { Quiz } from "../models/Quiz";
import QuizQuestionForm from "./QuizQuestionForm";
import { Question } from "../models/Question";

const QuizForm: React.FC = () => {
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState<Quiz>({ id: uuidv4(), name: '', questions: [] });

  const handleSave = () => {
    const updatedQuiz = {
      ...quiz,
      questions: quiz.questions.map(question => {
        const correctAnswer = question.answers.find(answer => answer.isCorrect)?.id || null;
        return { ...question, correctAnswer };
      })
    };

    const quizzes = JSON.parse(localStorage.getItem('quizzes') || '[]');
    quizzes.push(updatedQuiz);
    localStorage.setItem('quizzes', JSON.stringify(quizzes));
    navigate("/");
  };

  const addQuestion = () => {
    const newQuestion: Question = { id: uuidv4(), text: '', answers: [], correctAnswer: null };
    setQuiz({ ...quiz, questions: [...quiz.questions, newQuestion] });
  };

  const updateQuestion = (index: number, updatedQuestion: Question) => {
    const updatedQuestions = [...quiz.questions];
    updatedQuestions[index] = updatedQuestion;
    setQuiz({ ...quiz, questions: updatedQuestions });
  };

  const deleteQuestion = (index: number) => {
    const updatedQuestions = [...quiz.questions];
    updatedQuestions.splice(index, 1);
    setQuiz({ ...quiz, questions: updatedQuestions });
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Create Quiz</h1>
      <input
        type="text"
        value={quiz.name}
        onChange={(e) => setQuiz({ ...quiz, name: e.target.value })}
        placeholder="Quiz name"
        className="w-full p-2 mb-4 border border-gray-300 rounded"
      />
      {quiz.questions.map((question, index) => (
        <QuizQuestionForm
          key={question.id}
          question={question}
          setQuestion={(updatedQuestion) => updateQuestion(index, updatedQuestion)}
          onDelete={() => deleteQuestion(index)}
        />
      ))}
      <div className="flex justify-between">
        <button onClick={addQuestion} className="p-2 bg-blue-500 text-white rounded">
          Add Question
        </button>
        <button onClick={handleSave} className="p-2 bg-green-500 text-white rounded">
          Save Quiz
        </button>
      </div>
    </div>
  );
};

export default QuizForm;
