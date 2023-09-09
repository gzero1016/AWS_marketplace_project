import React, { Children } from "react";
/** @jsxImportSource @emotion/react */
import Header from "./Header/Header";
import Profile from "./Profile/Profile";
import Title from "./Title/Title";

function HeaderLayout({ children }) {
  return (
    <>
      <Header />
      <Profile />
      <Title />

      {children}
    </>
  );
}

export default HeaderLayout;
