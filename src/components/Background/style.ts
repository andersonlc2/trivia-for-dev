import styled from 'styled-components/native';

export const Background = styled.View`
    width: 100%;
    height: 100%;
`;

export const SvgBackground = styled.ImageBackground`
    width: 100%;
    height: 720px;
`;

export const Logo = styled.View`
    margin-left: auto;
    padding-top: 25px;
    flex-direction: row;
    flex-wrap: wrap;
    width: 50%;
    justify-content: flex-start;
`;

export const Text = styled.Text`
    line-height: 68px;
    color: white;
    font-size: ${(props: {font: any}) => props.font || '12px'};
    line-height: ${(props: {line: any}) => props.line || '66px'};
    font-weight: bold;
`;
