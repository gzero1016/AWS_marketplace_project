import './App.css';
import { Route, Routes } from 'react-router-dom';
import FeedPage from './pages/FeedPage/FeedPage';
import TimeLinePage from './pages/TimeLinepage/TimeLinePage';
import { Reset } from 'styled-reset';
import ReviewPage from './pages/ReviewPage/ReviewPage';
import TitleButton from './component/HeaderLayout/Title/TitleButton/TitleButton';

function App() {
  return (
      <div>
        <Reset />
          <TitleButton name="피드" path="/feed" />
          <TitleButton name="타임라인" path="/timeline" />
          <TitleButton name="리뷰" path="/review" />
        <Routes>
          <Route path="/feed" element={<FeedPage />} />
          <Route path="/timeline" element={<TimeLinePage />} />
          <Route path="/review" element={<ReviewPage />} />
        </Routes>
      </div>
  );
}

export default App;
