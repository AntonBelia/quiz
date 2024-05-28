import React from "react";
import { Link } from "react-router-dom";
import QuizList from "../components/QuizList";

const Home: React.FC = () => {
  return (
    <div className="p-4 flex flex-col">
			<QuizList />
			<div className="p-4 max-w-2xl mx-auto">
				<Link to="/create" className="text-blue-500">Create New Quiz</Link>
			</div>
    </div>
  );
};

export default Home;
