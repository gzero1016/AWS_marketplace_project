import { css } from "@emotion/react";

export const SLayout = css`
    & button {
        cursor: pointer;
    }
    `;

export const SScrollButtonContainer = css`
    display: flex;
    padding-top: 10px;
    `;

export const SScrollableButtons = css`
    display: flex;
    gap: 7px;
    scroll-behavior: smooth;
    overflow-y: hidden;
    
    ::-webkit-scrollbar {
        display: none;
    }
    `;

export const SButtonLayout = css`
    margin: auto;
    width: 700px;
    .react-horizontal-scrolling-menu--scroll-container::-webkit-scrollbar {
        display: none;
    }
    .react-horizontal-scrolling-menu--scroll-container {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
    }
`;


export const SButtonBox = css`
    display: flex;
    width: 700px;
    overflow: hidden;
    `;



export const SButtonDescription = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;

    h2 {
        font-size: 24px;
        margin-bottom: 8px;
    }

    p {
        font-size: 16px;
        text-align: center;
    }
`;