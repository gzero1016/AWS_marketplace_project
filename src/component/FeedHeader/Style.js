import { css } from "@emotion/react";

export const SLayout = css`
    display: flex;
    justify-content: center;
    align-items: center;
    & button {
        cursor: pointer;
    }
`;

export const SMainLayout = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 66px;
    background-color: rgb(248, 250, 251);
`;

export const SFeedContainer = css`
    padding: 0px 20px;
    margin: auto;
    `;

export const SFeedMainContainer = css`
    display: flex;
    justify-content: space-between;
    width: 700px;
    `;

export const SButtonContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SAllButtonBox = css`
    padding: 6px 0px 6px 20px;
    `;

export const SFollowingButtonBox = css`
    padding: 6px 0px 6px 8px;
    `;

export const SAreasButtonBox = css`
    padding: 6px 20px 6px 8px;
    `;

export const SAllButton = css`
    padding: 0px 13px;
    font-size: 15px;
    height: 42px;
    font-weight: 500;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 6px 0px;
    background-color: white;
    border: none;
    border-radius: 5px;
    `;

export const SSelectedButton = css`
    padding: 0px 13px;
    font-size: 15px;
    height: 42px;
    font-weight: 700;
    box-shadow: rgba(37, 146, 255, 0.35) 0px 2px 6px 0px;
    background: linear-gradient(90deg, rgb(45, 141, 238), rgb(45, 161, 238));
    border: none;
    border-radius: 5px;
    color: white;
`;

export const SCurrnetBox = css`
    display: flex;
    padding: 20px 12px;
    border: none;
    color: gray;
    background-color: transparent;
    cursor: pointer;
`;

export const SCurrnetIcon = css`
    margin-right: 4px;
    * {
        color: gray;
    }
`;
