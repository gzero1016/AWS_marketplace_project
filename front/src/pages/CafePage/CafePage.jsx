import React from 'react';
import HeaderLayout from '../../component/HeaderLayout/HeaderLayout';
import FeedHeader from '../../component/FeedHeader/FeedHeader';
import FeedTitle from '../../component/FeedTitle/FeedTitle';
import CafeFeed from '../../component/CafeFeed/CafeFeed';
import Bottom from '../../component/Bottom/Bottom';

function CafePage(props) {
    return (
        <>
            <HeaderLayout />
            <FeedHeader />
            <FeedTitle />
            <CafeFeed />
            <Bottom />
        </>
    );
}

export default CafePage;