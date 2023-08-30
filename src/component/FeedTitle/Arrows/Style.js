import { css } from "@emotion/react";

export const SScrollButton = css`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    color: #333;
    border: none;
    cursor: pointer;
    
    &:hover {
        border: none;
        background-color: transparent;
        color: #333;
    }

    &:disabled {
        opacity: 0;
        cursor: default;
    }
`;