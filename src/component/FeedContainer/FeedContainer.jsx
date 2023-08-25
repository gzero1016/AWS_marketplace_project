import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { TbCurrentLocation } from "react-icons/tb";

function FeedContainer(props) {
    return (
        <div css={S.SLayout}>
            <div css={S.SHeaderLayout}>
                <div css={S.SHeader}>
                    <button css={S.SFeedHeaderButton}>피드</button>
                    <button css={S.SHeaderButton}>타임라인</button>
                    <button css={S.SHeaderButton}>리뷰</button>
                    <button css={S.SHeaderButton}>예약주문</button>
                    <button css={S.SHeaderButton}>저장</button>
                </div>
            </div>
            <div css={S.SMainLayout}>
                <div css={S.SFeedContainer}>
                    <div css={S.SFeedMainContainer}>
                        <div>
                            <button>전체</button>
                            <button>팔로잉</button>
                            <button>+ 관심지역</button>
                        </div>
                        <button css={S.SCurrnetBox}>
                            <TbCurrentLocation css={S.SCurrnetIcon}/>
                            <span>현위치</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeedContainer;