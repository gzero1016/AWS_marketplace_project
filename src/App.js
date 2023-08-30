import "./App.css";
import { Route, Routes } from "react-router-dom";
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
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {

  // 패스워드 초기값 , 버튼누른거 기준으로 스크롤 가운데로
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
        <Route path="/" element={<FeedPage />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/timeline" element={<TimeLinePage />} />
        <Route path="/review" element={<ReviewPage />} />
        <Route path="/reservation" element={<ReservationPage />} />
        <Route path="/save" element={<SavePage />} />
        <Route path="/it" element={<ITPage />} />
        <Route path="/cafe" element={<CafePage />} />
        <Route path="/daily" element={<DailyPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
