import React, { Children } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import Header from './Header/Header';
import Profile from './Profile/Profile';
import Title from './Title/Title';

function HeaderLayout({ children }) {
    return (
        <div css={S.SLayout}>
            <Header />
            <Profile />
            <Title />

            {children}
        </div>
    );
}

export default HeaderLayout;