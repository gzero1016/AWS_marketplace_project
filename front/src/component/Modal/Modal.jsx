import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";

function Modal({ onClose }) {
    return (
        <div css={S.SModalBackground}>
            <div css={S.SModalContent}>
                <div css={S.SModalTop}>
                    <h2>인증은
                        <br />
                        모바일 환경에서만
                        <br />
                        가능합니다
                    </h2>
                </div>
                <div css={S.SModalBottom}>
                    <button css={S.SModalButton}onClick={onClose}>확인</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;