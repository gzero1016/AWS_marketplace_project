import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import TitleButton from './TitleButton/TitleButton';
import { Link } from 'react-router-dom';

function Title(props) {
    return (
        <div css={S.SLayout}>
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
                    <TitleButton name="예약주문" />
                    <TitleButton name="저장" />
                </div>
            </div>
        </div>
    );
}

export default Title;