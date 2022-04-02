import React from 'react';
import styled from 'styled-components';
import oc from 'open-color';
import { shadow, media } from '../../styles/styleUtil';

// 상단 고정, 그림자
const Positioner = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0px;
    height: 58px;
    width: 100%;
    ${shadow(1)}
`;

// 흰 배경, 내용 중간 정렬
const WhiteBackground = styled.div`
    background: white;
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%
`;

// 해더의 내용
const HeaderContents = styled.div`
    width: 90%;
    height: 55px;
    display: flex;
    flex-direction: row;
    align-items: center;

    padding-right: 1rem;
    padding-left: 1rem;
    ${media.wide`
        width: 992px;
    `}

    ${media.tablet`
        width: 100%;
    `}
`;

// 로고
const Logo = styled.div`
    font-size: 1.4rem;
    letter-spacing: 2px;
    color: ${oc.yellow[9]};
    font-weight: bold;
    font-family: 'Rajdhani';
`;

// 중간 여백
const Spacer = styled.div`
    flex-grow: 1;
`;

// 하단 그래디언트 테두리
const GradientBorder = styled.div`
    height: 3px;
    background: linear-gradient(to right, ${oc.blue[2]}, ${oc.blue[8]});
`;

const Emoji = styled.span`
    role="img"; 
    aria-label="dog"
`
const HeaderSpacer = styled.div`
    width: 100%;
    height: 58px;
`
export const Header = () => {
    return (
        <>
            <HeaderSpacer/>
            <Positioner>
                <WhiteBackground>
                    <HeaderContents>
                        <Logo>
                            My Web Site
                            <Emoji>🐕😳</Emoji>
                        </Logo>
                        <Spacer/>
                        Header Text
                    </HeaderContents>
                </WhiteBackground>
                <GradientBorder/>
            </Positioner>
        </>
    );
};