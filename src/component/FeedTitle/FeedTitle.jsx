import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { Link, useLocation } from 'react-router-dom';

function FeedTitle({ name }) {
    const [selectedButtonName, setSelectedButtonName] = useState('');
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
        '캠핑'
    ];

    useEffect(() => {
        const path = location.pathname;
        const buttonName = path === '/it' ? 'IT' : '';
        setSelectedButtonName(buttonName);
    }, [location.pathname]);

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
                    {buttons.map((buttonName, index) => (
                        <div key={index}>
                            <button css={[S.SButton, selectedButtonName === buttonName && S.SSelectedButton]}
                            onClick={() => handleButtonClick(buttonName)}>
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
