import React from 'react';
import HeaderLayout from '../../component/HeaderLayout/HeaderLayout';
import FeedHeader from '../../component/FeedHeader/FeedHeader';
import HiddenFeed from '../../component/HiddenFeed/HiddenFeed';
import Bottom from '../../component/Bottom/Bottom';
import FeedTitle from '../../component/FeedTitle/FeedTitle';

function ITPage(props) {
    return (
        <div>
            <HeaderLayout>
            <FeedHeader />
            <FeedTitle />
            <HiddenFeed />
            <Bottom />
            </HeaderLayout>
        </div>
    );
}

export default ITPage;