import React from 'react';
import { MdOutlineEmojiPeople } from "react-icons/md";
import { AiOutlineRight } from "react-icons/ai";
import { BsCheck2Circle } from "react-icons/bs";
import { PiPencilSimpleLineBold } from "react-icons/pi";
/** @jsxImportSource @emotion/react */
import * as S from "./Style";

function Profile(props) {
    return (
        <div css={S.SLayout}>
            <div css={S.SProfileMainContainer}>
                <div css={S.SProfileContainer}>
                    <img css={S.SProfileImg} src="https://m.place.naver.com/my/_next/static/image/_/assets/images/icon_profile_default.cf1f777d594520630ff249eb31ab38c2.png" alt="" />
                    <button css={S.SLoginContainer}>
                        <span css={S.SLogin}>로그인하기</span>
                        <AiOutlineRight css={S.SLoginIcon}/>
                    </button>
                </div>
                <div css={S.SButtonContainer}>
                    <div css={S.SReviewBox}>
                        <PiPencilSimpleLineBold css={S.SReviewIcon}/>
                        <button css={S.SReview}>리뷰 쓰기</button>
                    </div>
                    <div css={S.SMissionBox}>
                        <BsCheck2Circle css={S.SMissionIcon}/>
                        <button css={S.SMission}>미션</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;