import React, { useContext } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { VisibilityContext } from 'react-horizontal-scrolling-menu';

function Card({ itemId, selected, onClick, children }) {
    const visibility = useContext(VisibilityContext);

    return (
        <div css={[S.SButton, selected === itemId && S.SSelectedButton]} onClick={() => onClick(visibility)} role="button">
            {children}
        </div>
    );
}

export default Card;