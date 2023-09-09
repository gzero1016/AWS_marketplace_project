import { css } from "@emotion/react";

export const SHeader = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 540px;
    padding: 21px 0px;
    margin: auto;
    `;

export const SBackButton = css`
    width: 30px;
    height: 30px;
    background-color: transparent;
    border: none;
    cursor: pointer;
`;

export const SLanguageBox = css`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    * {
        color: rgb(48, 48, 56);
    }

    & button {
        background-color: transparent;
        border: none;
        cursor: pointer;
    }
`;

export const SLanguageList = css`
    position: absolute;
    top: 30px;
    padding: 14px;
    border: 1px solid rgb(214, 214, 216);
    border-radius: 4px;
    box-shadow: rgba(18, 28, 70, 0.08) 2px 2px 8px 0px;
    background-color: white;
    z-index: 210;
    
    & li {
        color: rgb(48, 48, 56);
        line-height: 16px;
        font-size: 14px;
        font-weight: 500;
        white-space: nowrap;
        cursor: pointer;
        :hover {
            font-weight: 700;
        }
    }
`;

export const SLanguageListLi = css`
    padding-top: 14px;
    
`;