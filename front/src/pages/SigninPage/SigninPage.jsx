import React from 'react';
import SigninHeader from "../../component/SigninFeed/SigninHeader/SigninHeader";
import SigninContainer from '../../component/SigninFeed/SigninContainer/SigninContainer';

function LoginPage(props) {
    return (
        <>
            <SigninHeader />
            <SigninContainer />
        </>
    );
}

export default LoginPage;