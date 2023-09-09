import React from 'react';
import Header from './Header/Header';
import LoginProfile from './LoginProfile/LoginProfile';
import Title from './Title/Title';

function LoginHeaderLayout({ children }) {
    return (
        <>
            <Header />
            <LoginProfile />
            <Title />

            {children}
        </>
    );
}

export default LoginHeaderLayout;