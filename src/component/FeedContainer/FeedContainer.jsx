import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";

function FeedContainer(props) {
    return (
        <div css={S.SLayout}>
            <button css={S.SLayoutButton}>피드</button>
            <button>타임라인</button>
            <button>리뷰</button>
            <button>예약주문</button>
            <button>저장</button>
        </div>
    );
}

export default FeedContainer;