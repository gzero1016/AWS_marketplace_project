import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import TitleButton from './TitleButton/TitleButton';

function Title(props) {
    return (
        <div css={S.SLayout}>
            <div css={S.SHeaderLayout}>
                <div css={S.SHeader}>
                    <TitleButton name="피드" />
                    <TitleButton name="타임라인" />
                    <TitleButton name="리뷰" />
                    <TitleButton name="예약주문" />
                    <TitleButton name="저장" />
                </div>
            </div>
        </div>
    );
}

export default Title;