import { css } from "@emotion/react";

export const SLayout = css`
    display: flex;
    width: 100%;
    padding-top: 20px;
    padding-bottom: 11px;
    height: 120px;
    background-color:rgb(6, 180, 149);
`;

export const SHeaderLayout = css`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 20px;
    width: 100%;
    height: 51px;
    background-color:rgb(6, 180, 149);
`;

export const SHeader = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    width: 375px;
    height: 51px;
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
    width: 60px;
    height: 60px;
    border: 2px solid white;
    background-color: white;
    border-radius: 50%;
    cursor: pointer;
`;

export const SLoginContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
`;


export const SLogin = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    color: white;
    font-size: 17px;
    font-weight: 500;
    line-height: 2rem;
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
    cursor: pointer;
`;

export const SReview = css`
    position: absolute;
    transform: translateX(-50%);
    left: 55%;
    border: none;
    font-size: 15px;
    font-weight: 700;
    color: white;
    background-color: transparent;
    cursor: pointer;
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
    cursor: pointer;
`;

export const SMission = css`
    position: absolute;
    transform: translateX(-50%);
    left: 60%;
    border: none;
    font-size: 15px;
    font-weight: 700;
    color: white;
    background-color: transparent;
    cursor: pointer;
`;

export const SMissionIcon = css`
    position: absolute;
    transform: translateX(-50%);
    left: 33%;
    * {
        color: white;
    }
    `;

export const SReviewIcon = css`
    position: absolute;
    transform: translateX(-50%);
    left: 36%;
    * {
        color: white;
        background-color: white;
    }
`;

export const SButtonContainer = css`
    display: flex;
    margin-top: 15px;
`;

