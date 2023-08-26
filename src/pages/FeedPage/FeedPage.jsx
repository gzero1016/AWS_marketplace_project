import React from 'react';
import HeaderLayout from '../../component/HeaderLayout/HeaderLayout';
import FeedHeader from '../../component/FeedHeader/FeedHeader';
import Bottom from '../../component/Bottom/Bottom';

function FeedPage(props) {
    return (
        <div>
            <HeaderLayout>
            <FeedHeader />
            <Bottom />
            </HeaderLayout>
        </div>
    );
}

export default FeedPage;