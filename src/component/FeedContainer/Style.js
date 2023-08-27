import { css } from "@emotion/react";

export const SLayout = css`
    display: flex;
    * {
        cursor: pointer;
    }
`;

export const SContainer = css`
    padding: 16px 20px;
    margin: auto;
    width: 720px;
    height: 659px;
`;

export const SProfileConatiner = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px;
`;

export const SProfileBox = css`
    display: flex;
    flex-direction: column;
`;

export const SImgProfileBox = css`
    display: flex;
    align-items: center;
`;

export const SSubBox = css`
    align-items: center;
`;

export const SImgBox = css`
    margin-right: 8px;
    width: 42px;
    height: 42px;
    border: 2px solid #fff;
    border-radius: 50%;
`;

export const SImg = css`
    display: flex;
    width: 40px;
    height: 40px;
    border: 2px solid #eee;
    border-radius: 50%;
`;

export const SProfileName = css`
    font-size: 16px;
    font-weight: 700;
    height: 20px;
`;

export const SInfo = css`
    margin-top: 2px;
    color: rgb(143, 143, 143);
    font-size: 13px;
    font-weight: 400;
    letter-spacing: -0.2px;
`;

export const SFollow = css`
    background-color: rgb(239, 246, 254);
    border-radius: 4px;
    border: none;
    font-weight: 600;
    color: rgb(40, 124, 255);
    height: 30px;
    width: 70px;
`;

export const SIconBox = css`
    position: relative;
    margin-left: 4px;
    margin-right: -12px;
    height: 30px;
    letter-spacing: -1px;
    width: 26px;
    background-color: rgba(0, 0, 0, 0.0);
    border: none;
`;

export const SIcon = css`
    position: absolute;
    transform: translate(-50%, -70%);
    top: 50%;
    height: 18px;
    * {
        color: rgb(184, 184, 184);
    }
`;
