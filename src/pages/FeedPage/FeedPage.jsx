import React from "react";
import HeaderLayout from "../../component/HeaderLayout/HeaderLayout";
import FeedHeader from "../../component/FeedHeader/FeedHeader";
import Bottom from "../../component/Bottom/Bottom";
import FeedContainer from "../../component/FeedContainer/FeedContainer";
import FeedTitle from "../../component/FeedTitle/FeedTitle";
import HiddenFeed from "../../component/HiddenFeed/HiddenFeed";
import CafeFeed from "../../component/CafeFeed/CafeFeed";

function FeedPage(props) {
  return (
    <>
      <HeaderLayout />
      <FeedHeader />
      <FeedTitle />
      <FeedContainer />
      <CafeFeed />
      <Bottom />
    </>
  );
}

export default FeedPage;
