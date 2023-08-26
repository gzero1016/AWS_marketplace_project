import { css } from "@emotion/react";

export const SLayout = css`
    padding-top: 42px;
    padding-bottom: 36px;
    text-align: center;
`;

export const SMainContainer = css`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const SButton = css`
    padding: 0;
    letter-spacing: -.1px;
    vertical-align: top;
    border: none;
    background: transparent;
    font-size: 12px;
    color: #666;
    line-height: 15px;
    cursor: pointer;
    `;

export const Line = css`
    height: 13px;
    display: inline-block;
    vertical-align: top;
    width: 1px;
    margin: 2px 9px 0;
    background: #e1e1e1;
    content: "";
    `;

export const SFirstLine = css`
    margin-bottom: 5px;
    `;

export const SMiddleLine = css`
    margin: 5px 0;
`;

export const SBottomLine = css`
    margin-top: 5px;
`;
