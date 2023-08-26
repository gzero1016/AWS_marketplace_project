import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";

function TimeLineContainer(props) {
    return (
        <div css={S.SLayout}>
            <div css={S.SContainer}>
                <p css={S.SIcon}>🚩</p>
                <div css={S.FirstText}>
                    <strong>영수증/카드내역 인증, 예약, 주문</strong>
                    한
                    <br />
                    장소가 나의 기록이 됩니다.
                </div>
                <p css={S.SBottomText}>방문했던 곳을 한 눈에 모아보세요.</p>
                <div css={S.SImgBox}>
                    <img css={S.SImg} src="https://m.place.naver.com/my/_next/static/image/_/assets/images/panel_img_visit_20221202.fd5a3f0bd6ca8dbf3bd9cc7c5f98b110.png" alt="" />
                </div>
                <div css={S.SBtnBox}>
                    <button css={S.SBtn}>리뷰 참여하기</button>
                </div>
            </div>
        </div>
    );
}

export default TimeLineContainer;
