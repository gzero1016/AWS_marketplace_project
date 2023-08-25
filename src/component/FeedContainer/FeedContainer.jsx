import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { TbCurrentLocation } from "react-icons/tb";
import FeedButton from './FeedButton/FeedButton';

function FeedContainer(props) {
    return (
        <div css={S.SLayout}>
            <div css={S.SHeaderLayout}>
                <div css={S.SHeader}>
                    <FeedButton name="피드" />
                    <FeedButton name="타임라인" />
                    <FeedButton name="리뷰" />
                    <FeedButton name="예약주문" />
                    <FeedButton name="저장" />
                </div>
            </div>
            <div css={S.SMainLayout}>
                <div css={S.SFeedContainer}>
                    <div css={S.SFeedMainContainer}>
                        <div css={S.SButtonContainer}>
                            <div css={S.SAllButtonBox}>
                                <button css={S.SAllButton}>전체</button>
                            </div>
                            <div css={S.SFollowingButtonBox}>
                                <button css={S.SAllButton}>팔로잉</button>
                            </div>
                            <div css={S.SAreasButtonBox}>
                                <button css={S.SAllButton}>+ 관심지역</button>
                            </div>
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