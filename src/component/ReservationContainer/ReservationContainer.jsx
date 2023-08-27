import React from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "../ReservationContainer/Style";
import { SiNaver } from "react-icons/si";

function ReservationContainer(props) {
    return (
        <div css={S.SLayout}>
            <div css={S.SContainer}>
                <div css={S.SLoginText}>
                    <strong>로그인</strong>하고 예약,
                    <br />
                    주문 내역을 확인해보세요.
                </div>
                <div css={S.SNaverBox}>
                    <SiNaver css={S.SNaverIcon}/>
                    <button css={S.SNaverText}>네이버 로그인</button>
                </div>
            </div>
            <div css={S.SSubConatiner}>
                <div></div>
                <div>
                    <input type="text" />
                </div>
                <div>
                    <input type="text" />
                </div>
                <button>내 예약 확인</button>
            </div>
        </div>
    );
}

export default ReservationContainer;