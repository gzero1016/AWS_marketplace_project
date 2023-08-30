import { css } from "@emotion/react";

export const SLayout = css`
    & button {
        cursor: pointer;
    }
    `;

export const SScrollButtonContainer = css`
    display: flex;
    padding-top: 10px;
    `;

export const SScrollButton = css`
    background-color: transparent;
    color: transparent;
    border: none;
    cursor: pointer;
    
    &:hover {
        border: none;
        background-color: transparent;
        color: #333;
    }
    `;

export const SScrollableButtons = css`
    display: flex;
    gap: 7px;
    scroll-behavior: smooth;
    overflow-y: hidden;
    
    ::-webkit-scrollbar {
        display: none;
    }
    `;

export const SButtonLayout = css`
    margin: auto;
    `;

export const SButtonBox = css`
    display: flex;
    width: 700px;
    overflow: hidden;
    `;

export const SButton = css`
    padding: 0px 13px;
    border: 1px solid #eaeef2;
    border-radius: 19px;
    font-size: 14px;
    font-weight: 500;
    height: 36px;
    background-color: transparent;
    color: #666;
    white-space: nowrap; 
`;

export const SSelectedButton = css`
    padding: 0px 13px;
    border: 1px solid rgb(66, 66, 66);
    border-radius: 19px;
    font-size: 14px;
    font-weight: 500;
    height: 36px;
    background-color: rgb(66, 66, 66);;
    color: rgb(255, 255, 255);
`;

export const SButtonDescription = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;

    h2 {
        font-size: 24px;
        margin-bottom: 8px;
    }

    p {
        font-size: 16px;
        text-align: center;
    }
`;