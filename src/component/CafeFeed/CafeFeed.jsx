import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "../HiddenFeed/Style";
import { CiMenuKebab } from 'react-icons/ci';
import { IoLocation } from 'react-icons/io5';
import { PiSmileyLight } from 'react-icons/pi';
import { AiOutlineStar } from 'react-icons/ai';


function CafeFeed(props) {

    return (
        <div css={S.SLayout}>
            <div css={S.SContainer}>
                <div css={S.SProfileConatiner}>
                    <div css={S.SImgProfileBox}>
                        <img css={S.SImg} src="https://m.place.naver.com/my/_next/static/image/_/assets/images/icon_profile_default.cf1f777d594520630ff249eb31ab38c2.png" alt="" />
                        <div css={S.SProfileBox}>
                            <strong css={S.SProfileName}>Q1234567</strong>
                            <p css={S.SInfo}>사진리뷰 88 ・ 팔로워 6</p>
                        </div>
                    </div>
                    <div css={S.SSubBox}>
                        <button css={S.SFollow}>팔로우</button>
                        <button css={S.SIconBox}>
                            <CiMenuKebab css={S.SIcon} />
                        </button>
                    </div>
                </div>
                <div css={S.SImgConatiner}>
                    <img css={S.SImg1} src="\Imgs\케이크1.jpeg" alt=""/>
                    <img css={S.SImg2} src="\Imgs\케이크2.jpeg" alt=""/>
                    <img css={S.SImg3} src="\Imgs\케이크3.jpeg" alt=""/>
                    <div css={S.SLocationBox}>
                        <IoLocation css={S.SLocationIcon}/>
                        <p css={S.SLocationText}>제주시 이도이동 최신</p>
                    </div>
                </div>
            <p css={S.SImgText}>디저트 너무 맛있어요❤️ 근처계시면 케이크종류는 꼭드셔보라고 추천드려요!!</p>
            <div css={S.STagBox}>
                <button css={S.STagBt1}>🍰 디저트가 맛있어요</button>
                <button css={S.STagBt1}>✈️ 제주도 추천!</button>
                <button css={S.STagBt2}>+4</button>
            </div>
            <div css={S.SReactionContainer}>
                <button css={S.SReactionBnt}>
                    <PiSmileyLight css={S.SReactionIcon}/>
                    <p css={S.SReactionText}>반응 남기기</p>
                </button>
                <p css={S.STimeText}>8.28 월 방문</p>
            </div>
                <div css={S.SFeedBottomLayout}>
                    <div css={S.SFeedBottomConatiner}>
                        <button>클레망스 〉</button>
                        <p>케이크전문・제주특별자치도 제주시 이도이동</p>
                    </div>
                    <div css={S.SSaveBox}>
                        <AiOutlineStar css={S.SSaveIcon}/>
                        <div>저장</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CafeFeed;