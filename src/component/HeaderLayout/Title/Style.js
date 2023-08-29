import { css } from "@emotion/react";

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
  background-color: rgb(6, 180, 149);
`;

export const SHeader = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  width: 375px;
`;