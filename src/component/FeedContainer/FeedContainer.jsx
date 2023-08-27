import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { CiMenuKebab } from 'react-icons/ci';
import { IoLocation } from 'react-icons/io5';

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
                            <strong css={S.SProfileName}>문그내</strong>
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
                <div css={S.SImgConatiner}>
                    <div css={S.SMainImgBox}>
                        <img css={S.SImg1} src="/Imgs/그내1.jpeg" alt=""/>
                        <img css={S.SImg2} src="/Imgs/그내2.jpeg" alt=""/>
                    </div>
                    <div css={S.SLocationBox}>
                        <IoLocation css={S.SLocationIcon}/>
                        <p css={S.SLocationText}>동아대학교 승학캠퍼스</p>
                    </div>
                </div>
            <p css={S.SImgText}>[속보] 문근해 드디어 졸업, 많은이들에게 축하를 받고있다 전해짐</p>
            <div css={S.STagBox}>
                <button css={S.STagBt1}>🎉 졸업</button>
                <button css={S.STagBt2}>+1</button>
            </div>
            {/*<div>
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
                </div> */}
            </div>
        </div>
    );
}

export default FeedContainer;