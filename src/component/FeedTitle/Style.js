import { css } from "@emotion/react";

export const SLayout = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    * {
        cursor: pointer;
    }
`;

export const SButtonLayout = css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;
    width: 630px;
    height: 48px;
`;

export const SButtonContainer = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0px -20px;
    padding-top: 10px;
    padding-bottom: 2px;
    width: 800px;
    height: 36px;
    
    & div {
        padding-left: 6px;
    }
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