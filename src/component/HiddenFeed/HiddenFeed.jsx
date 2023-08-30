import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { CiMenuKebab } from 'react-icons/ci';
import { IoLocation } from 'react-icons/io5';
import { PiSmileyLight } from 'react-icons/pi';
import { AiOutlineStar } from 'react-icons/ai';
import { AiOutlineAlert } from 'react-icons/ai';
import { MdOutlineBlock } from 'react-icons/md';

function HiddenFeed(props) {
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
                        <img css={S.SImg} src="data:image/jpeg;base64,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" alt="" />
                        <div css={S.SProfileBox}>
                            <strong css={S.SProfileName}>코리아 IT아카데미</strong>
                            <p css={S.SInfo}>사진리뷰 1 ・ 팔로워 0</p>
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
                    <div css={S.SImgBox}>
                        <img css={S.SImg1} src="\Imgs\1.jpeg" alt=""/>
                        <img css={S.SImg2} src="\Imgs\2.jpeg" alt=""/>
                        <img css={S.SImg3} src="\Imgs\3.jpeg" alt=""/>
                    </div>
                    <div css={S.SLocationBox}>
                        <IoLocation css={S.SLocationIcon}/>
                        <p css={S.SLocationText}>부산IT학원-코리아IT아카데미</p>
                    </div>
                </div>
            <p css={S.SImgText}>코리아 IT아카데미 일등강사님 교습소 개설예정!!</p>
            <div css={S.STagBox}>
                <button css={S.STagBt1}>👩‍💻 일타강사</button>
                <button css={S.STagBt1}>🤚 9명 선착순</button>
                <button css={S.STagBt2}>+1</button>
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
                        <button>부산IT학원-코리아IT아카데미 〉</button>
                        <p>IT · 부산광역시 부산진구 중앙대로</p>
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

export default HiddenFeed;