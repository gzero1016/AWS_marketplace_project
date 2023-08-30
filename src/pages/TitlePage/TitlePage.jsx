import React from 'react';
import HeaderLayout from '../../component/HeaderLayout/HeaderLayout';
import FeedHeader from '../../component/FeedHeader/FeedHeader';
import FeedTitle from '../../component/FeedTitle/FeedTitle';
import FeedContainer from '../../component/FeedContainer/FeedContainer';
import CafeFeed from '../../component/CafeFeed/CafeFeed';
import HiddenFeed from '../../component/HiddenFeed/HiddenFeed';
import Bottom from '../../component/Bottom/Bottom';

function TotalPage(props) {
    return (
        <>
            <HeaderLayout />
            <FeedHeader />
            <FeedTitle />
            <FeedContainer />
            <CafeFeed />
            <HiddenFeed />
            <Bottom />
        </>
    );
}
export default TotalPage;