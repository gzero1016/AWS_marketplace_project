import { css } from "@emotion/react";

export const SLayout = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SHeaderFixed = css`
  position: -webkit-sticky;
  position: sticky;
  top: -1px;
  background-color: white;
  z-index: 100;
  transition: all 0.3s ease;
`;

export const SHeaderLayout = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 20px;
  width: 100%;
  height: 51px;
  background-color: rgb(6, 180, 149);
`;

export const SHeader = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  width: 375px;
  height: 51px;
`;

export const SMainLayout = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: rgb(248, 250, 251);
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
  color: gray;
  cursor: pointer;
`;

export const SCurrnetIcon = css`
  * {
    color: gray;
  }
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
  box-shadow: (0, 0, 0, 0.06) 0px 2px 6px 0px;
  background-color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
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
  cursor: pointer;
`;
