import { css } from "@emotion/react";

export const SScrollButton = css`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    color: #333;
    border: none;
    opacity: 0;
    cursor: pointer;
    
    &:hover {
        border: none;
        background-color: transparent;
        color: #333;
        opacity: 1;
    }

    &:disabled {
        cursor: default;
    }
`;