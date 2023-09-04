import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { useNavigate } from 'react-router-dom';

function Bottom(props) {
    const navigate = useNavigate();

    const handleChagePage = () => {
        navigate("/joinMembership");
    }

    return (
        <div css={S.SBottomFixed}>
            <div css={S.SLayout}>
                <button css={S.SNextButton} onClick={handleChagePage}>다음</button>
            </div>
        </div>
    );
}

export default Bottom;