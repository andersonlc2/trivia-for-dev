import React from 'react';
import styled from 'styled-components';


type BackgroundProps = {
    children: React.ReactNode;
  };
  
const Background = (props: BackgroundProps) => {
    const Background = styled.View`
        width: 100%;
        height: 100%;
    `;

    const SvgBackground = styled.ImageBackground`
        width: 100%;
        height: 720px;
        `;

    const Logo = styled.View`
        margin-left: auto;
        padding-top: 25px;
        padding-right: 50px;
        flex-direction: row;
        flex-wrap: wrap;
        width: 200px;
        justify-content: center;
        align-items: center;
    `;

    const Text = styled.Text`
        line-height: 68px;
        color : white;
        font-size: ${(props: { font: any; }) => props.font || "12px"};
        line-height: ${(props: { line: any; }) => props.line || "66px" };
        font-weight: bold;
    `;

    return (
        <Background>
            <SvgBackground source={require('./background-image.png')} >
                <Logo>
                    <Text font={"32px"}>TRIVIA</Text>
                    <Text font={"10px"}>FOR</Text>
                    <Text font={"72px"}>DEV</Text>
                </Logo>
            {props.children}
            </SvgBackground>
        </Background>
    );

}

export default Background;