import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { CiMenuKebab } from 'react-icons/ci';
import { IoLocation } from 'react-icons/io5';
import { PiSmileyLight } from 'react-icons/pi';
import { AiOutlineStar } from 'react-icons/ai';
import { AiOutlineAlert } from 'react-icons/ai';
import { MdOutlineBlock } from 'react-icons/md';

function FeedContainer(props) {
    const [showLanguageList, setShowLanguageList] = useState(false);

    const toggleReportList = () => {
        setShowLanguageList(!showLanguageList);
    };

    const loginFeed = () => {
        window.location.href = '/login';
    };

    return (
        <div css={S.SLayout}>
            <div css={S.SContainer}>
                <div css={S.SProfileConatiner}>
                    <div css={S.SImgProfileBox}>
                        <img css={S.SImg} src="https://avatars.githubusercontent.com/u/93970980?v=4" alt="" />
                        <div css={S.SProfileBox}>
                            <strong css={S.SProfileName}>문그내</strong>
                            <p css={S.SInfo}>사진리뷰 9 ・ 팔로워 0</p>
                        </div>
                    </div>
                    <div css={S.SSubBox}>
                        <button css={S.SFollow} onClick={loginFeed}>팔로우</button>
                        <button css={S.SIconBox}>
                            <CiMenuKebab css={S.SIcon} onClick={toggleReportList}/>
                            {showLanguageList && (
                                <ul css={S.SList}>
                                    <div css={S.SListTop}>
                                        <li>리뷰/리뷰어 신고</li>
                                        <AiOutlineAlert css={S.SListIcon1}/>
                                    </div>
                                    <div css={S.SListBottom}>
                                        <li>리뷰어 차단</li>
                                        <MdOutlineBlock css={S.SListIcon2}/>
                                    </div>
                                </ul>
                            )}
                        </button>
                    </div>
                </div>
                <div css={S.SImgConatiner}>
                    <img css={S.SImg1} src="/Imgs/그내1.jpeg" alt=""/>
                    <img css={S.SImg2} src="/Imgs/그내2.jpeg" alt=""/>
                    <div css={S.SLocationBox}>
                        <IoLocation css={S.SLocationIcon}/>
                        <p css={S.SLocationText}>동아대학교 승학캠퍼스</p>
                    </div>
                </div>
            <p css={S.SImgText}>[속보] 문근해 드디어 졸업, 많은이들에게 축하를 받고있다 전해짐</p>
            <div css={S.STagBox}>
                <button css={S.STagBt1}>🎉 졸업</button>
                <button css={S.STagBt1}>🏫 동아대학교</button>
                <button css={S.STagBt1}>⛰️ 승학캠퍼스</button>
                <button css={S.STagBt1}>🍎 뉴턴의 사과나무 공원</button>
                <button css={S.STagBt2}>+1</button>
            </div>
            <div css={S.SReactionContainer}>
                <button css={S.SReactionBnt}>
                    <PiSmileyLight css={S.SReactionIcon}/>
                    <p css={S.SReactionText}>반응 남기기</p>
                </button>
                <p css={S.STimeText}>8.23 수 방문</p>
            </div>
                <div css={S.SFeedBottomLayout}>
                    <div css={S.SFeedBottomConatiner}>
                        <button>동아대학교 승학캠퍼스 〉</button>
                        <p>대학교 · 부산광역시 사하구 하단동</p>
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

export default FeedContainer;