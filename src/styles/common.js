import { css } from "@emotion/react";

export const GSCommon = css`
    html {
        width: 100%;
        height: 100%;
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