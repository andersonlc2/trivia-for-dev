import React from 'react';
import {Background, SvgBackground, Logo, Text} from './style';

type BackgroundProps = {
    children: React.ReactNode;
};

const BackgroundComponent = (props: BackgroundProps) => {
    return (
        <Background>
            <SvgBackground
                source={require('../../assets/images/background-image.png')}>
                <Logo>
                    <Text font={'32px'}>TRIVIA</Text>
                    <Text font={'10px'}>FOR</Text>
                    <Text font={'72px'}>DEV</Text>
                </Logo>
                {props.children}
            </SvgBackground>
        </Background>
    );
};

export default BackgroundComponent;
