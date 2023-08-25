import { css } from "@emotion/react";

export const SLayout = css`
    display: flex;
    width: 100%;
    padding-top: 20px;
    padding-bottom: 11px;
    height: 120px;
    background-color:rgb(6, 180, 149);
`;

export const SProfileMainContainer = css`
    flex-direction: column;
    align-items: center;
    padding: 0px 20px;
    margin: 0px auto;
    width: 335px;
    height: auto;
`;

export const SProfileContainer = css`
    display: flex;
    align-items: center;
    width: 100%;
`;

export const SProfileImg = css`
    justify-content: flex-start;
    margin-right: 27px;
    width: 64px;
    height: 64px;
    border: 2px solid white;
    background-color: white;
    border-radius: 50%;
`;

export const SLoginContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: none;
`;


export const SLogin = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    color: white;
    font-size: 17px;
    font-weight: 500;
    `;

export const SLoginIcon = css`
    transform: translate(0%, -30%);
    margin-top: 6px;
    margin-left: 5px;
    color: white;
    font-size: 11px;
`;

export const SReviewBox = css`
    display: flex;
    align-items: center;
    position: relative;
    width: 226px;
    height: 38px;
    background-color: rgb(12, 197, 164);
    border-radius: 8px;
`;

export const SReview = css`
    display: flex;
    align-items: center;
    position: absolute;
    transform: translateX(-50%);
    left: 60%;
    border: none;
    font-size: 15px;
    font-weight: 700;
    color: white;
    background-color: transparent;
    `;

export const SMissionBox = css`
    display: flex;
    align-items: center;
    position: relative;
    margin-left: 7px;
    width: 102px;
    height: 38px;
    background-color: rgb(12, 197, 164);
    border-radius: 8px;
`;

export const SMission = css`
    display: flex;
    align-items: center;
    position: absolute;
    transform: translateX(-50%);
    left: 60%;
    border: none;
    font-size: 15px;
    font-weight: 700;
    color: white;
    background-color: transparent;
`;

export const SButtonContainer = css`
    display: flex;
    margin-top: 15px;
`;