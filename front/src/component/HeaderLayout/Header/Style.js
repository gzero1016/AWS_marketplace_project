import { css } from "@emotion/react";

export const SLayout = css`
    display: flex;
    justify-content: space-between;
    background-color:rgb(6, 180, 149);
    padding: 8px 18px 8px 15px;
    * {
        cursor: pointer;
    }
`;

export const SH1 = css`
    display: flex;
    align-items: center;
    font-size: 17px;
    font-weight: 500;
    color: white;
`;

export const SFont = css`
    padding: 11px 2px 5px 2px;
    margin-left: 3px;
    margin-bottom: 3px;
    border: none;
    background-color: transparent;
    font-size: 16px;
    font-weight: 500;
    color: white;
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`; 

export const SnaverLayout = css`
    display: flex;
    justify-content: center;
    align-items: center;
    
`;

export const SNaverIconContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 8px 5px 7px 5px;
    width: 22px;
    height: 22px;
    background-color: white;
`;

export const SNaverIcon = css`
    * {
        color: rgb(6, 180, 149);
    }
    font-size: 9px;
`;

export const SLeftBox = css`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const SCouponButton = css`
    position: relative;
    border: none;
    background-color: transparent;
    width: 40px;
    color: white;
    font-size: 12px;
    font-weight: 700;
    white-space: nowrap;
`;

export const SMenuButton = css`
    position: relative;
    border: none;
    background-color: transparent;
    width: 38px;
    height: 36px;
    padding: 10px;
    margin-right: -10px;
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