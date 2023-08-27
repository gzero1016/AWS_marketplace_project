import { css } from "@emotion/react";

export const GSCommon = css`
    * {
        font-family: 'NanumSquareRoundEB', sans-serif;
    }
    
    button {
        font-family: 'NanumSquareRoundEB', sans-serif;
    }

    html {
        width: 100%;
        height: 100%;
        overflow-x: hidden;
        overflow-y: auto;
    }

    *::-webkit-scrollbar {
        border: none;
        width: 6px;   
    }

    *::-webkit-scrollbar-thumb {
        border-radius: 5px;
        background-color: #ccc;
    }
`;