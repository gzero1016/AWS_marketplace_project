import { css } from "@emotion/react";

export const SModalBackground = css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

export const SModalContent = css`
    position: relative;
    background-color: white;
    width: 335px;
    height: 180px;
    border-radius: 12px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    font-smooth: inherit;

`;

export const SModalTop = css`
    padding: 36px 18px 21px 18px;
    height: 69px;
    font-size: 18px;
    font-weight: 600;
    letter-spacing: -1px;
    line-height: 23px;
    text-align: center;
    border-bottom: 1px solid rgb(236, 240, 242);
`;

export const SModalBottom = css`
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 53px;
    cursor: pointer;

`;

export const SModalButton = css`
    border: none;
    background-color: transparent;
    color: rgb(0, 180, 155);
    font-size: 16px;
    font-weight: 400;
    cursor: pointer;
    :hover {
        font-weight: 900;
    }
`;