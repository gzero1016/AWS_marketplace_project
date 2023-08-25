import { css } from "@emotion/react";

export const SLayout = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

export const SHeaderButton = css`
    padding: 14px 5px;
    background-color: transparent;
    border: none;
    font-size: 17px;
    font-weight: 400;
    color: white;
    cursor: pointer;
`;

export const SFeedHeaderButton = css`
    padding: 14px 5px;
    background-color: transparent;
    border: none;
    font-size: 17px;
    font-weight: 800;
    color: white;
    border-bottom: 3px solid white;
    border-radius: 2px;
    cursor: pointer;
`;

export const SMainLayout = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #eee;
`;

export const SFeedContainer = css`
    padding: 0px 20px;
    margin: auto;
`;

export const SFeedMainContainer = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 680px;
    height: 66px;
`;

export const SCurrnetBox = css`
    display: flex;
    align-items: center;
    position: relative;
    padding: 20px 12px;
    border: none;
    cursor: pointer;
`;

export const SCurrnetIcon = css`
    * {
        color: #999;
    }
`;