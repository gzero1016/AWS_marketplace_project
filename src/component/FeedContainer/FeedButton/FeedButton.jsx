import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useRecoilState } from 'recoil';
import { selectedButtonNameState } from '../../../stores/Store';

function FeedButton({ name }) {
    const [selectedButtonName, setSelectedButtonName] = useRecoilState(selectedButtonNameState);

    const handleButtonClick = () => {
        setSelectedButtonName(name);
    };

    const isSelected = selectedButtonName === name || (!selectedButtonName && name === '피드');

    const buttonStyle = css`
        padding: 14px 5px;
        background-color: transparent;
        border: none;
        font-size: 17px;
        font-weight: ${isSelected ? '800' : '400'};
        border-bottom: ${isSelected ? '3px solid white' : 'none'};
        border-radius: ${isSelected ? '2px' : 'none'};
        color: white;
        cursor: pointer;
    `;

    return (
        <button css={buttonStyle} onClick={handleButtonClick}>
            {name}
        </button>
    );
}

export default FeedButton;
