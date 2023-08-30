import React, { useContext, useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { VisibilityContext } from 'react-horizontal-scrolling-menu';

function Card({ itemId, selected, onClick, children }) {
    const visibility = useContext(VisibilityContext);

    // 경로가 "/feed"이고 선택된 아이템이 해당 아이템일 때만 selected를 false로 설정하여 스타일 적용 안 함
    // const isSelected = window.location.pathname == "/feed" || "" && selected == itemId ? false : selected == itemId;
    const isSelected = (window.location.pathname === "/feed") && selected == itemId ? false : selected == itemId;

    return (
        <div css={[S.SButton, isSelected && S.SSelectedButton]} onClick={() => onClick(visibility)} role="button">
            {children}
        </div>
    );
}

export default Card;