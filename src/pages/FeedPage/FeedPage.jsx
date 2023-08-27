import React from 'react';
import HeaderLayout from '../../component/HeaderLayout/HeaderLayout';
import FeedHeader from '../../component/FeedHeader/FeedHeader';
import Bottom from '../../component/Bottom/Bottom';
import FeedContainer from '../../component/FeedContainer/FeedContainer';
import FeedTitle from '../../component/FeedTitle/FeedTitle';

function FeedPage(props) {
    return (
        <div>
            <HeaderLayout>
            <FeedHeader />
            <FeedTitle />
            {/* <FeedContainer /> */}
            <Bottom />
            </HeaderLayout>
        </div>
    );
}

export default FeedPage;