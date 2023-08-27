import { css } from "@emotion/react";

export const SLayout = css`
    display: flex;
    width: 100%;
    border-bottom: 10px solid rgba(240, 240, 240, 0.5);;
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
    * {
        cursor: pointer;
    }
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

export const SImgConatiner = css`
    position: relative;
    margin-top: 2px;
    width: 720px;
    height: 450px;
    * {
        cursor: pointer;
    }
`;

export const SMainImgBox = css`
    display: flex;
`;

export const SImg1 = css`
    width: 360px;
    height: 450px;
    border: 1px solid #dbdbdb;
    border-bottom-left-radius: 8px;
    border-top-left-radius: 8px;
    `;

export const SImg2 = css`
    width: 360px;
    height: 450px;
    border: 1px solid #dbdbdb;
    border-bottom-right-radius: 8px;
    border-top-right-radius: 8px;
`;

export const SLocationBox = css`
    display: flex;
    align-items: center;
    position: absolute;
    left: 8px;
    bottom: 5px;
    height: 20px;
    border-radius: 4px;
    background-color: rgb(0, 0, 0, 0.5);
    color: white;
    font-size: 12px;
    font-weight: 700;
`;

export const SLocationIcon = css`
    padding-left: 4px;
    padding-right: 2px;
`;

export const SLocationText = css`
    padding-right: 4px;
`;

export const SImgText = css`
    margin-top: 10px;
    color: rgb(102, 102, 102);
    font-size: 15px;
    height: 22px;
`;

export const STagBox = css`
    display: flex;
    margin-top: 6px;
    margin-bottom: -7px;
    * {
        background-color: rgb(245, 247, 248);
        color: rgb(102, 102, 102);
        border: none;
        border-radius: 4px;
        font-size: 13px
    }
`;

export const STagBt1 = css`
    display: flex;
    padding: 4px 7px;
    margin-right: 4px;
    margin-bottom: 7px;
    height: 26px;
`;

export const STagBt2 = css`
    display: flex;
    padding: 4px 7px;
    margin-right: 4px;
    margin-bottom: 7px;
    height: 26px;
    line-height: 18px;
`;