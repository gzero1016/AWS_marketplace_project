import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style"

function Bottom(props) {
    return (
        <div css={S.SLayout}>
            <div css={S.SMainContainer}>
                <div css={S.SFirstLine}>
                    <button css={S.SButton}>로그인</button>
                    <div css={S.Line}></div>
                    <button css={S.SButton}>전체서비스</button>
                </div>
                <div css={S.SMiddleLine}>
                    <button css={S.SButton}>이용정책</button>
                    <div css={S.Line}></div>
                    <button css={S.SButton}>MY플레이스 고객센터</button>
                    <div css={S.Line}></div>
                    <button css={S.SButton}>신고센터</button>
                    <div css={S.Line}></div>
                    <button css={S.SButton}>공지사항</button>
                </div>
                <div css={S.SBottomLine}>
                    <button css={S.SButton}>ⓒ NAVER Corp.</button>
                </div>
            </div>
        </div>
    );
}

export default Bottom;