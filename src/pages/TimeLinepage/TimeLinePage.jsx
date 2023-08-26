import React from 'react';
import HeaderLayout from '../../component/HeaderLayout/HeaderLayout';
import Bottom from '../../component/Bottom/Bottom';
import TimeLineContainer from '../../component/TimeLineContainer/TimeLineContainer';

function TimeLinePage(props) {
    return (
        <HeaderLayout>
        <TimeLineContainer />
        <Bottom />
        </HeaderLayout>
    );
}

export default TimeLinePage;