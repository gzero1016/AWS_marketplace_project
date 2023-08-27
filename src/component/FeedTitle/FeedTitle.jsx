import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";

function FeedTitle({ name }) {
    const [ selectedButtonName, setSelectedButtonName ] = useState('');

    const buttons = [
        'IT',
        '카페',
        '숙박',
        '양식',
        '일식',
        '문화예술',
        '테마파크',
        '낚시',
        '캠핑',
        '드라이브'
    ];

    const handleButtonClick = (buttonName) => {
        setSelectedButtonName(buttonName);
    }

    return (
        <div css={S.SLayout}>
            <div css={S.SButtonLayout}>
                <div css={S.SButtonContainer}>
                    {buttons.map((buttonName, index) => (
                        <div key={index}>
                            <button
                                css={selectedButtonName === buttonName ? S.SSelectedButton : S.SButton}
                                onClick={() => handleButtonClick(buttonName)}
                            >
                                {buttonName}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FeedTitle;
