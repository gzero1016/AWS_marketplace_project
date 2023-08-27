import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { CiMenuKebab } from 'react-icons/ci';

function FeedContainer(props) {
    return (
        <div css={S.SLayout}>
            <div css={S.SContainer}>
                <div css={S.SProfileConatiner}>
                    <div css={S.SImgProfileBox}>
                        <div css={S.SImgBox}>
                            <img css={S.SImg} src="https://m.place.naver.com/my/_next/static/image/_/assets/images/icon_profile_default.cf1f777d594520630ff249eb31ab38c2.png" alt="" />
                        </div>
                        <div css={S.SProfileBox}>
                            <strong css={S.SProfileName}>노오멀</strong>
                            <p css={S.SInfo}>사진리뷰 9 ・ 팔로워 0</p>
                        </div>
                    </div>
                    <div css={S.SSubBox}>
                        <button css={S.SFollow}>팔로우</button>
                        <button css={S.SIconBox}>
                            <CiMenuKebab css={S.SIcon} />
                        </button>
                    </div>
                </div>

                {/* <div>
                    <div>
                        <img src="" alt="" />
                    </div>
                    <div>
                        <img src="" alt="" />
                    </div>
                </div>
                <div>진짜 맛있어요 불쇼가 멋있어요 짱짱</div>
                <div>
                    <div>
                        icon
                        <button></button>
                    </div>
                    <button>+4</button>
                </div>
                <div>
                    <div>
                        icon
                        <button></button>
                    </div>
                    <div></div>
                </div>
                <div>
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                    <div>
                        icon
                        <div></div>
                    </div>
                </div> */}
            </div>
        </div>
    );
}

export default FeedContainer;