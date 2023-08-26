import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "../Style";

function ReviewContainer(props) {
    return (
        <div css={S.SLayout}>
            <div css={S.SContainer} className='Review'>
                <p css={S.SIcon}>🚩</p>
                <div css={S.FirstText}>
                    정성스레 작성한
                    <strong> 리뷰</strong>
                    <br />
                    내 리뷰를 모아 만든
                    <strong> 테마리스트</strong>
                </div>
                <p css={S.SBottomText}>나의 발자취를 소중한 기록으로 남겨보세요.</p>
                <div css={S.SImgBox}>
                    <img css={S.SImg} src="https://m.place.naver.com/my/_next/static/image/_/assets/images/panel_img_review_20221202.87ca2c0d90f42473c28ef6cff083836e.png" alt="" />
                </div>
                <div css={S.SBtnBox}>
                    <button css={S.SBtn}>리뷰 참여하기</button>
                </div>
            </div>
        </div>
    );
}

export default ReviewContainer;
