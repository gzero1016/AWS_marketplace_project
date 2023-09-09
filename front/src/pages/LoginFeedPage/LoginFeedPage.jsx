import React from 'react';
import LoginHeaderLayout from '../../component/HeaderLayout/LoginHeaderLayout';
import FeedHeader from '../../component/FeedHeader/FeedHeader';
import FeedTitle from '../../component/FeedTitle/FeedTitle';
import FeedContainer from '../../component/FeedContainer/FeedContainer';
import CafeFeed from '../../component/CafeFeed/CafeFeed';
import HiddenFeed from '../../component/HiddenFeed/HiddenFeed';
import Bottom from '../../component/Bottom/Bottom';

function LoginFeedPage(props) {
    return (
        <>
            <LoginHeaderLayout />
            <FeedHeader />
            <FeedTitle />
            <FeedContainer />
            <CafeFeed />
            <HiddenFeed />
            <Bottom />
        </>
    );
}

export default LoginFeedPage;