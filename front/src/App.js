import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import FeedPage from "./pages/FeedPage/FeedPage";
import TimeLinePage from "./pages/TimeLinepage/TimeLinePage";
import { Reset } from "styled-reset";
import ReviewPage from "./pages/ReviewPage/ReviewPage";
import TitleButton from "./component/HeaderLayout/Title/TitleButton/TitleButton";
import SavePage from "./pages/SavePage/SavePage";
import ReservationPage from "./pages/ReservationPage/ReservationPage";
import { Global } from "@emotion/react";
import * as S from "./styles/common";
import ITPage from "./pages/ITPage/ITPage";
import CafePage from "./pages/CafePage/CafePage";
import DailyPage from "./pages/DailyPage/DailyPage";
import SigninPage from "./pages/SigninPage/SigninPage";
import TitlePage from "./pages/TitlePage/TitlePage";
import AgreeingPage from "./pages/AgreeingPage/AgreeingPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginFeedPage from "./pages/LoginFeedPage/LoginFeedPage";

function App() {
  return (
    <>
      <Reset />
      <Global styles={S.GSCommon} />
      <div style={{ display: "none" }}>
        <TitleButton name="피드" path="/it" />
        <TitleButton name="피드" path="/cafe" />
        <TitleButton name="피드" path="/daily" />
        <TitleButton name="피드" path="/" />
        <TitleButton name="피드" path="/feed" />
        <TitleButton name="타임라인" path="/timeline" />
        <TitleButton name="리뷰" path="/review" />
        <TitleButton name="예약·주문" path="/reservation" />
        <TitleButton name="저장" path="/save" />
      </div>
      <Routes>
        <Route path="/" element={<Navigate to="/feed" />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/title" element={<TitlePage />} />
        <Route path="/timeline" element={<TimeLinePage />} />
        <Route path="/review" element={<ReviewPage />} />
        <Route path="/reservation" element={<ReservationPage />} />
        <Route path="/save" element={<SavePage />} />
        <Route path="/it" element={<ITPage />} />
        <Route path="/cafe" element={<CafePage />} />
        <Route path="/daily" element={<DailyPage />} />
        <Route path="/agreeing" element={<AgreeingPage />} />
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/loginFeed" element={<LoginFeedPage />} />
      </Routes>
    </>
  );
}

export default App;
