import React, { useState } from 'react';
/** @jsxImportSource @emotion/react */
import * as S from "./Style";
import { Global, css } from '@emotion/react';

function JoinMembership(props) {

    const [ isButtonFocused, setIsButtonFocused ] = useState(false);
    const [ isIdContainerActive, setIdContainerActive ] = useState(false);
    const [ isPwContainerActive, setIsPwContainerActive ] = useState(false);
    const [ isEmailContainerActive, setIsEmailContainerActive ] = useState(false);
    const [ isNameContainerActive, setIsNameContainerActive ] = useState(false);
    const [ isCellPhoneContainerActive, setIsCellPhoneContainerActive ] = useState(false);
    const [ isBirthdayContainerActive, setIsBirthdayContainerActive ] = useState(false);
    const [ isPasswordVisible, setIsPasswordVisible ] = useState(false);
    const [ isManActive, setIsManActive ] = useState(false);
    const [ isWomanActive, setIsWomanActive ] = useState(false);
    const [ isLocalActive, setIsLocalActive ] = useState(true);
    const [ isForeignerActive, setIsForeignerActive ] = useState(false);

    const handleButtonClick = () => {
        setIsButtonFocused(!isButtonFocused);
        setIsPasswordVisible(!isPasswordVisible);
    };

    const handleInputFocus = (type) => {
        switch (type) {
            case 'id':
                setIdContainerActive(true);
                break;
            case 'password':
                setIsPwContainerActive(true);
                break;
            case 'email':
                setIsEmailContainerActive(true);
                break;
            case 'name':
                setIsNameContainerActive(true);
                break;
            case 'birthday':
                setIsBirthdayContainerActive(true);
                break;
            case 'cellphone':
                setIsCellPhoneContainerActive(true);
                break;
            default:
                break;
        }
    };

    const handleInputBlur = (type) => {
        switch (type) {
            case 'id':
                setIdContainerActive(false);
                break;
            case 'password':
                setIsPwContainerActive(false);
                break;
            case 'email':
                setIsEmailContainerActive(false);
                break;
            case 'name':
                setIsNameContainerActive(false);
                break;
            case 'birthday':
                setIsBirthdayContainerActive(false);
                break;
            case 'cellphone':
                setIsCellPhoneContainerActive(false);
                break;
            default:
                break;
        }
    };

    const handleGenderClick = (gender) => {
        if(gender === '남자') {
            setIsManActive(true);
            setIsWomanActive(false);
        } else if (gender === '여자') {
            setIsWomanActive(true);
            setIsManActive(false);
        }
    };

    const handleForegignerClick = (foreigner) => {
        if(foreigner === '내국인') {
            setIsLocalActive(true);
            setIsForeignerActive(false);
        } else if (foreigner === '외국인') {
            setIsLocalActive(false);
            setIsForeignerActive(true);
        }
    };

    return (
        <div>
        <Global styles={css` body {background-color: #39393c;}`}/>
            <div css={S.SLayout}>
                <div css={S.SContainer}>
                <div css={S.SHeaderContainer}>
                    <div css={S.SHeader}></div>
                </div>
                <div css={S.SStateBox}>
                    <p>실명인증된 아이디로 가입</p>
                    <input type="checkbox" checked={true} />
                </div>
                <div css={S.STopJoin}>
                    <div css={[S.SFirstBox, isIdContainerActive && S.SIdactive]}>
                        <div></div>
                        <input type="text" placeholder="아이디" onFocus={() => handleInputFocus('id')} onBlur={() => handleInputBlur('id')} />
                        <p>@naver.com</p>
                    </div>
                    <div css={[S.SSecondBox, isPwContainerActive && S.SPwactive]}>
                        <div></div>
                        <input type={isPasswordVisible ? 'text' : 'password'}
                            placeholder="비밀번호" onFocus={() => handleInputFocus('password')} onBlur={() => handleInputBlur('password')} />
                        <button
                            css={isButtonFocused ? S.SButtonFocus : S.SButton}
                            onClick={handleButtonClick}>
                        </button>
                    </div>
                    <div css={[S.SThirdBox, isEmailContainerActive && S.SEmailactive]}>
                        <div></div>
                        <input type="text" placeholder='[선택] 비밀번호 분실 시 확인용 이메일' onFocus={() => handleInputFocus('email')} onBlur={() => handleInputBlur('email')}/>
                    </div>
                </div>
                <div css={S.SBottomContainer}>
                    <div css={[S.SBottomFirstBox, isNameContainerActive && S.SNameactive]}>
                        <div></div>
                        <input type="text" placeholder="이름" onFocus={() => handleInputFocus('name')} onBlur={() => handleInputBlur('name')} />
                    </div>
                    <div css={[S.SBottomSecondBox, isBirthdayContainerActive && S.SBirthdayactive]}>
                        <div></div>
                        <input type="text" placeholder='생년월일 8자리' onFocus={() => handleInputFocus('birthday')} onBlur={() => handleInputBlur('birthday')} />
                    </div>
                    <div css={S.SBottomThirdBox}>
                        <div css={S.SGender}>
                            <button css={[S.SLeftButton, isManActive && S.SManactive]} onClick={() => handleGenderClick('남자')}>남자</button>
                            <button css={[S.SRightButton, isWomanActive && S.SWomanactive]} onClick={() => handleGenderClick('여자')}>여자</button>
                        </div>
                        <div css={S.SForeigner}>
                            <button css={[S.SLeftButton, isLocalActive && S.SLocalactive]} onClick={() => handleForegignerClick('내국인')}>내국인</button>
                            <button css={[S.SRightButton, isForeignerActive && S.SForeigneractive]} onClick={() => handleForegignerClick('외국인')}>외국인</button>
                        </div>
                    </div>
                    <div css={[S.SBottomFourthBox, isCellPhoneContainerActive && S.SCellPhoneactive]}>
                        <div></div>
                        <input type="text" placeholder='휴대전화번호'  onFocus={() => handleInputFocus('cellphone')} onBlur={() => handleInputBlur('cellphone')} />
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default JoinMembership;