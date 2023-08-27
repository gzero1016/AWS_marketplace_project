import { css } from "@emotion/react";

export const SH1 = css`
    display: flex;
    align-items: center;
    width: 95%;
    font-size: 17px;
    font-weight: 500;
    color: white;
    cursor: pointer;
    `;

export const SFont = css`
    padding: 11px 2px 5px 2px;
    margin-left: 3px;
    border: none;
    background-color: transparent;
    font-size: 17px;
    font-weight: 500;
    color: white;
    `;

export const SHeader = css`
    display: flex;
    align-items: center;
    padding: 8px 15px;
    height: 36px;
`;

export const SLayout = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color:rgb(6, 180, 149);
`;

export const SNaverIcon = css`
  * {
    color: rgb(6, 180, 149);
    }
    position: absolute;
    font-size: 9px;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
`;

export const SnaverLayout = css`
    padding: 8px 5px 7px 5px;
`;

export const SNaverIconContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 18px;
    height: 18px;
    border: 1px solid white;
    background-color: white;
    cursor: pointer;
`;

export const SCouponButton = css`
    position: relative;
    border: none;
    background-color: transparent;
    margin: 0px 5px;
    width: 40px;
    height: 40px;
    color: white;
    cursor: pointer;
    font-size: 12px;
    font-weight: 700;
    `;

export const SMenuButton = css`
    position: relative;
    border: none;
    background-color: transparent;
    width: 38px;
    height: 36px;
    padding: 10px;
    margin-right: -10px;
    cursor: pointer;
`;

export const SMenuIcon = css`
    position: absolute;
    left: 50%;
    top: 50%;
    font-size: 27px;
    transform: translate(-50%, -50%);
    * {
        color: white;
    }
`;

export const SCouponIcon = css`
    position: absolute;
    left: 50%;
    top: 50%;
    font-size: 35px;
    transform: translate(-50%, -50%);
`;