import React from 'react';
import { SiNaver } from "react-icons/si";
import { BsTicket } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";
/** @jsxImportSource @emotion/react */
import * as S from "./Style";

function Header(props) {
    return (
        <div css={S.SLayout}>
            <h1 css={S.SH1}>
                <div css={S.SnaverLayout}>
                    <div css={S.SNaverIconContainer}>
                        <SiNaver css={S.SNaverIcon}/>
                    </div>
                    <div css={S.SFont}>
                        MY플레이스
                    </div>
                </div>
            </h1>
            <div css={S.SLeftBox}>
                <button css={S.SCouponButton}>
                    <BsTicket css={S.SCouponIcon}/>
                    쿠폰
                </button>
                <button css={S.SMenuButton}>
                    <HiMenu css={S.SMenuIcon}/>
                </button>
            </div>
        </div>
    );
}

export default Header;