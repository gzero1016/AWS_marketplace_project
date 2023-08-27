import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // useLocation을 불러옵니다.
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useRecoilState } from 'recoil';
import { selectedButtonNameState } from '../../../../stores/SelectedButtonNameState';

function TitleButton({ name, path }) {
    const [selectedButtonName, setSelectedButtonName] = useRecoilState(selectedButtonNameState);
    const location = useLocation();

    React.useEffect(() => {
        const currentPath = location.pathname;
        if (currentPath === path) {
            setSelectedButtonName(name);
        }
    }, [location.pathname, path, setSelectedButtonName]);

    const handleButtonClick = () => {
        setSelectedButtonName(name);
    };

    const isSelected = selectedButtonName === name;

    const buttonStyle = css`
        position: relative;
        padding: 14px 5px;
        background-color: transparent;
        border: none;
        font-size: 17px;
        font-weight: ${isSelected ? '800' : '400'};
        color: ${isSelected ? '#fff' : 'rgba(255,255,255,.7)'};
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
        <button to={path} css={combinedStyles} onClick={handleButtonClick}>
            {name}
        </button>
    );
}

export default TitleButton;