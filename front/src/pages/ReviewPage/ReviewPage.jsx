import React from 'react';
import HeaderLayout from '../../component/HeaderLayout/HeaderLayout';
import ReviewContainer from '../../component/ReviewContainer/ReviewContainer';
import Bottom from '../../component/Bottom/Bottom';

function ReviewPage(props) {
    return (
        <HeaderLayout>
        <ReviewContainer />
        <Bottom />
        </HeaderLayout>
    );
}

export default ReviewPage;