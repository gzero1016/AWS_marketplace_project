import { css } from "@emotion/react";

export const SLayout = css`
    display: flex;
    width: 100%;
    border-bottom: 10px solid rgba(240, 240, 240, 0.5);;
    `;

export const SContainer = css`
    padding: 16px 20px;
    margin: auto;
    `;

export const SProfileConatiner = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px 0px;
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
    display: flex;
    align-items: center;
    `;

export const SImg = css`
    display: flex;
    margin-right: 10px;
    width: 40px;
    height: 40px;
    border: 2px solid #eee;
    border-radius: 50%;
`;

export const SProfileName = css`
    font-size: 16px;
    font-weight: 700;
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
    margin-top: 5px;
    margin-left: 4px;
    letter-spacing: -1px;
    background-color: rgba(0, 0, 0, 0.0);
    border: none;
`;

export const SIcon = css`
    position: absolute;
    transform: translate(-50%, -70%);
    * {
        color: rgb(184, 184, 184);
    }
`;

export const SImgConatiner = css`
    position: relative;
    * {
        cursor: pointer;
    }
`;

export const SImgBox = css`
    position: relative;
    width: 660px;
    height: 360px;
`;

export const SImg1 = css`
    width: 380px;
    height: 360px;
    border-right: 2px solid white;
    border-bottom-left-radius: 8px;
    border-top-left-radius: 8px;
    `;

export const SImg2 = css`
    position: absolute;
    width: 278px;
    height: 180px;
    border-bottom-right-radius: 8px;
    border-top-right-radius: 8px;
`;

export const SImg3 = css`
    position: absolute;
    right: 0px;
    top: 50.5%;
    width: 278px;
    height: 178px;
    border-bottom-right-radius: 8px;
`;

export const SLocationBox = css`
    display: flex;
    align-items: center;
    position: absolute;
    left: 8px;
    bottom: 10px;
    height: 23px;
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

export const SReactionContainer = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 13px;
    `;

export const SReactionBnt = css`    
    display: flex;
    color: rgb(66, 66, 66);
    background-color: transparent;
    border: none;
    padding: 0px;
    cursor: pointer;
`;

export const SReactionIcon = css`
    margin-right: 7px;
    width: 22px;
    height: 22px;
    color: rgb(66, 66, 66);
`;

export const SReactionText = css`
    font-size: 14px;
    font-weight: 500;
    white-space: nowrap;
    line-height: 22px;
`;

export const STimeText = css`
    color: rgb(154, 154, 154);
    font-size: 13px;
    line-height: 22px;
`;

export const SFeedBottomLayout = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 15px;
    padding: 12px 15px 16px 13px;
    border: 1px solid rgb(236, 240, 242);
    border-radius: 8px;
`;

export const SFeedBottomConatiner = css`
    display: flex;
    flex-direction: column;
    & button {
        border: none;
        background-color: transparent;
        font-size: 16px;
        font-weight: 700;
        text-align: left;
        padding: 0px;
        cursor: pointer;
    }
    & p {
        margin-top: 5px;
        color: rgb(143, 143, 143);
        font-size: 13px;
        text-align: left;
        letter-spacing: -1px;
    }
`;

export const SSaveBox = css`
    cursor: pointer;
    & div {
        margin-top: 6px;
        color: rgb(143, 143, 143);
        font-size: 11px;
        font-weight: 500;
    }
`;

export const SSaveIcon = css`
    color: rgb(184, 184, 184);
`;

export const SList = css`
    position: absolute;
    top: 20px;
    right: 0px;
    border: 1px solid rgb(214, 214, 216);
    border-radius: 18px;
    box-shadow: rgba(18, 28, 70, 0.08) 2px 2px 8px 0px;
    background-color: white;
    z-index: 210;
    
    & li {
        color: rgb(51, 51, 51);
        line-height: 16px;
        font-size: 16px;
        font-weight: 400;
        white-space: nowrap;
        letter-spacing: -0.3px;
        cursor: pointer;
    }
`;

export const SListTop = css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 17px;
    width: 165px;
    height: 56px;
    border-bottom: 1px solid rgba(18, 28, 70, 0.08);
`;

export const SListBottom = css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-left: 17px;
    width: 165px;
    height: 56px;
`;

export const SListIcon1 = css`
    position: absolute;
    right: 15px;
    top: 16px;
    font-size: 20px;
`;

export const SListIcon2 = css`
    position: absolute;
    right: 15px;
    botoom: 16px;
    font-size: 20px;
`;