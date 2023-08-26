import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { TbCurrentLocation } from "react-icons/tb";

function FeedHeader(props) {
    const [selectedButton, setSelectedButton] = useState('전체'); // 초기값으로 '전체' 버튼을 선택

    const handleButtonClick = (buttonName) => {
        setSelectedButton(buttonName); // 선택한 버튼 이름을 상태에 저장
    };

    return (
        <div css={S.SLayout}>
            <div css={S.SMainLayout}>
                <div css={S.SFeedContainer}>
                    <div css={S.SFeedMainContainer}>
                        <div css={S.SButtonContainer}>
                            <div css={S.SAllButtonBox}>
                                <button css={selectedButton === '전체' ? S.SSelectedButton : S.SAllButton} onClick={() => handleButtonClick('전체')}>
                                    전체</button>
                            </div>
                            <div css={S.SFollowingButtonBox}>
                                <button css={selectedButton === '팔로잉' ? S.SSelectedButton : S.SAllButton} onClick={() => handleButtonClick('팔로잉')}>
                                    팔로잉</button>
                            </div>
                            <div css={S.SAreasButtonBox}>
                                <button css={selectedButton === '+ 관심지역' ? S.SSelectedButton : S.SAllButton} onClick={() => handleButtonClick('+ 관심지역')}>
                                    + 관심지역</button>
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


export default FeedHeader;