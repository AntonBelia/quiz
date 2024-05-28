import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Quiz as QuizType } from "../models/Quiz";

const TakeQuiz: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [quizzes] = useLocalStorage<QuizType[]>("quizzes", []);
  const quiz = quizzes.find((q) => q.id === id);
  const navigate = useNavigate();

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    if (quiz) {
      setTimerOn(true);
    }
    return () => {
      setTimerOn(false);
    };
  }, [quiz]);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timerOn]);

  if (!quiz) {
    return <div>Quiz not found</div>;
  }

  const currentQuestion = quiz.questions[currentQuestionIndex];

  const handleAnswer = (answerIndex: number) => {
    const isCorrect = currentQuestion.answers[answerIndex].isCorrect;
    const updatedUserAnswers = [...userAnswers, answerIndex];
    setUserAnswers(updatedUserAnswers);

    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    setCurrentQuestionIndex(nextQuestionIndex);

    if (nextQuestionIndex === quiz.questions.length) {
      navigate(`/result/${quiz.id}`, {
        state: {
          score: score + (isCorrect ? 1 : 0),
          total: quiz.questions.length,
          time,
        },
      });
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">{quiz.name}</h2>
      <div className="mt-4">
        <p>Total Questions: {quiz.questions.length}</p>
        <p>Correct Answers: {score}</p>
        <p>Time Elapsed: {time} seconds</p>
      </div>
      <div className="mt-4">
        <p className="text-xl">{currentQuestion.text}</p>
        <div className="mt-2">
          {currentQuestion.answers.map((answer, index) => (
            <button
              key={answer.id}
              onClick={() => handleAnswer(index)}
              className={"block w-full p-2 mt-2 rounded bg-blue-500 text-white"}
            >
              {answer.text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TakeQuiz;
