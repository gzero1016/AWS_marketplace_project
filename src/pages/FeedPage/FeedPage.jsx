import React from 'react';
import Header from '../../component/HeaderLayout/Header/Header';
import Profile from '../../component/HeaderLayout/Profile/Profile';
import FeedContainer from '../../component/FeedContainer/FeedContainer';

function FeedPage(props) {
    return (
        <>
            <Header />
            <Profile />
            <FeedContainer />
        </>
    );
}

export default FeedPage;