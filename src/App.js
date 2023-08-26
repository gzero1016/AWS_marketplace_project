import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import FeedPage from './pages/FeedPage/FeedPage';
import TimeLinePage from './pages/TimeLinepage/TimeLinePage';
import { Reset } from 'styled-reset';
import ReviewPage from './pages/ReviewPage/ReviewPage';

function App() {
  return (
      <div>
        <Reset />
        <Routes>
          <Route path="/feed" element={<FeedPage />} />
          <Route path="/timeline" element={<TimeLinePage />} />
          <Route path="/review" element={<ReviewPage />} />
        </Routes>
      </div>
  );
}

export default App;
