import { css } from "@emotion/react";

export const SButton = css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 13px;
    border: 1px solid #eaeef2;
    border-radius: 19px;
    font-size: 14px;
    font-weight: 500;
    height: 36px;
    background-color: transparent;
    color: #666;
    white-space: nowrap;
    cursor: pointer; 
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