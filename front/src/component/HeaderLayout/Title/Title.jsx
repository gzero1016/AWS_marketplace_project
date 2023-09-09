import React, { useState } from "react";
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import TitleButton from "./TitleButton/TitleButton";
import { Link } from "react-router-dom";

function Title(props) {

  return (
    <div css={S.SHeaderFixed}>
      <div css={S.SHeaderLayout}>
        <div css={S.SHeader}>
          <Link to={"/feed"}>
            <TitleButton name="피드" />
          </Link>
          <Link to={"/timeline"}>
            <TitleButton name="타임라인" />
          </Link>
          <Link to={"/review"}>
            <TitleButton name="리뷰" />
          </Link>
          <Link to={"/reservation"}>
            <TitleButton name="예약·주문" />
          </Link>
          <Link to={"/save"}>
            <TitleButton name="저장" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Title;
