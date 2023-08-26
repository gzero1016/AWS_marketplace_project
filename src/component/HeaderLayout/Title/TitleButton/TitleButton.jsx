import React from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useRecoilState } from 'recoil';
import { selectedButtonNameState } from '../../../../stores/SelectedButtonNameState';

function TitleButton({ name }) {
    const [selectedButtonName, setSelectedButtonName] = useRecoilState(selectedButtonNameState);

    const handleButtonClick = () => {
        setSelectedButtonName(name);
    };

    const isSelected = selectedButtonName === name || (!selectedButtonName && name === '피드');

    const buttonStyle = css`
        position: relative;
        padding: 14px 5px;
        background-color: transparent;
        border: none;
        font-size: 17px;
        font-weight: ${isSelected ? '800' : '400'};
        color: white;
        cursor: pointer;
        display: inline-block;
    `;

    const selectedStyle = isSelected && css`
        &::after {
            content: '';
            position: absolute;
            bottom: -1px;
            left: 0;
            width: 100%;
            height: 3px;
            background-color: white;
            border-radius: 3px;
        }
    `;

    const combinedStyles = [buttonStyle, selectedStyle];

    return (
        <button css={combinedStyles} onClick={handleButtonClick}>
            {name}
        </button>
    );
}

export default TitleButton;