import { css } from "@emotion/react";

export const SLayout = css`
    `;

export const SContainer = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 44px;
    padding-bottom: 50px;
    height: 115px;
    `;

export const SSubConatiner = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 44px;
    padding-bottom: 50px;
    margin: 0px 20px;
    border-top: 1px solid rgb(235, 237, 239);
`;

export const SNaverBox = css`
    position: relative;
    padding: 10px 25px;
    margin-top: 15px;
    height: 24px;
    width: 104px;
    border-radius: 22px;
    background-color: rgb(3, 199, 90);
`;

export const SNaverText = css`
    position: absolute;
    left: 58%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    font-size: 16px;
    background-color: transparent;
    border: none;
    color: white;
`;

export const SNaverIcon = css`
    position: absolute;
    left: 19%;
    top: 49%;
    transform: translate(-50%, -50%);
    height: 13px;
    font-size: 16px;
    background-color: transparent;
    border: none;
    color: white;
    * {
        color: white;
    }
`;

export const SLoginText = css`
    display: flex;
    justify-content: center;
    font-size: 20px;
    line-height: 28px;
    letter-spacing: -0.3px;
    & strong {
        display: flex;
        justify-content: center;
    }
`;