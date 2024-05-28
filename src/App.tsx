import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CreateQuiz from './pages/CreateQuiz';
import EditQuiz from './pages/EditQuiz';
import TakeQuiz from './pages/TakeQuiz';
import Result from './pages/Result';

const App: React.FC = () => {
  return (
    <Router>
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateQuiz />} />
          <Route path="/edit/:id" element={<EditQuiz />} />
          <Route path="/quiz/:id" element={<TakeQuiz />} />
          <Route path="/result/:id" element={<Result />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
