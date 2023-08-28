import React, { useEffect, useRef, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { Link, useLocation } from 'react-router-dom';

function FeedTitle({ name }) {
    const [ selectedButtonName, setSelectedButtonName ] = useState('');
    const location = useLocation();

    const buttons = [
        'IT',
        '카페',
        '숙박',
        '양식',
        '일식',
        '문화예술',
        '테마파크',
        '낚시',
        '드라이브',
        '중식',
        '아이와 함께',
        '일상',
        '등산',
        '뷔페/레스토랑',
        '물놀이'
    ];

    useEffect(() => {
        const path = location.pathname;
        const buttonName = path === '/it' ? 'IT' : '';
        setSelectedButtonName(buttonName);
    }, [ location.pathname ]);

    const handleButtonClick = (buttonName) => {
        setSelectedButtonName(buttonName);

        if (buttonName === 'IT') {
            window.location.href = '/it';
        } else {
        }
    }

    return (
        <div css={S.SLayout}>
            <div css={S.SButtonLayout}>
                <div css={S.SButtonContainer}>
                    <div css={S.SButtonBox}>
                        <div css={S.SScrollableButtons}>
                            {buttons.map((buttonName, index) => (<button key={index} css={[ S.SButton, selectedButtonName === buttonName && S.SSelectedButton ]}
                                onClick={() => handleButtonClick(buttonName)}>
                                {buttonName}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeedTitle;





