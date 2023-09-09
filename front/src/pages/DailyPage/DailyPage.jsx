import React from 'react';
import HeaderLayout from '../../component/HeaderLayout/HeaderLayout';
import FeedHeader from '../../component/FeedHeader/FeedHeader';
import FeedTitle from '../../component/FeedTitle/FeedTitle';
import FeedContainer from '../../component/FeedContainer/FeedContainer';
import Bottom from '../../component/Bottom/Bottom';

function DailyPage(props) {
    return (
        <>
            <HeaderLayout />
            <FeedHeader />
            <FeedTitle />
            <FeedContainer />
            <Bottom />
        </>
    );
}
export default DailyPage;