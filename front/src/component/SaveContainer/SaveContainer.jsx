import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "../Style";

function SaveContainer(props) {
    return (
        <div css={S.SLayout}>
            <div css={S.SContainer} className='Save'>
                <p css={S.SIcon}>🚩</p>
                <div css={S.FirstText}>
                    가고싶은 맛집, 카페 저장하고
                    <br />
                    나의
                    <strong> 리스트</strong>
                    를 만들어 보세요
                </div>
                <p css={S.SBottomText} className='Save'>여행 코스도 계획하기도 굳~/</p>
                <div css={S.SImgBox}>
                    <img css={S.SImg} className='Save' src="https://m.place.naver.com/my/_next/static/image/_/assets/images/panel_img_bookmark.4939778b9d2b5079407ea43536a05566.png" alt="" />
                </div>
            </div>
        </div>
    );
}

export default SaveContainer;