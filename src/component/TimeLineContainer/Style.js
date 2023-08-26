import { css } from "@emotion/react";

export const SLayout = css`
    padding: 25px 20px;
    width: 100%;
    height: 439px;
`;

export const SContainer = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 40px 30px 30px 34px ;
    margin: auto;
    background-image: linear-gradient(142deg,#55abab,#6fc2ac);
    width: 656px;
    height: 369px;
    border-radius: 15px;
`;

export const SIcon = css`
    margin: 0px auto 15px;
`;

export const SBtn = css`
    padding: 9px 0px;
    border: 0.3px solid white;
    border-radius: 22px;
    background-color: transparent;
    width: 143px;
    height: 46px;
    font-size: 16px;
    font-weight: 400;
    color: white;
`;

export const SBtnBox = css`
    margin-top: 22px;
`;

export const SImg = css`
    height: 155px;
    width: 235px;
`;

export const SImgBox = css`
    margin-top: 27px;
`;

export const SBottomText = css`
    margin-top: 5px;
    color: rgb(187, 237, 238);
    font-size: 15px;
    line-height: 25px;
`;

export const FirstText = css`
    font-size: 20px;
    color: white;
    line-height: 26px;
    & strong {
        font-size: 20px;
        font-weight: 900;
        color: white;
        margin-bottom: 3px;
    }
`;
