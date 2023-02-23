import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../../routes/Stack/Models';
import styled from 'styled-components';
import Background from '../../components/Background';

export default () => {
    const navigation = useNavigation<propsStack>();

    const StyledView = styled.View`
        background-color: ${(props: { background: any; }) => props.background || "white"};
        width: ${(props: { width: any; }) => props.width || "90%"};
        height: ${(props: { height: any; }) => props.height || "600px"};
        margin-right: auto;
        margin-left: auto;
        border-radius: 5px;
        border: 2px solid #fdfdfd;
        
    `;

    const StyledText = styled.Text`
        color: #888;  
        margin: 24px;
    `;

    const Title = styled.Text`
        color: #888;  
        width: 100%;
        text-align: center;
        padding-top: 10px;
    `;

    return (
        <Background>
            <StyledText>Usuário</StyledText>
            <StyledView>
                <StyledView height="160px" width="90%" >
                    <Title>PONTUAÇÃO MÁXIMA</Title>
                    <StyledView height="160px" width="90%" >
                        
                    </StyledView>
                </StyledView>

                <StyledView height="5px" width="90%" background="#aaa"></StyledView>

                <StyledView height="420px" width="90%" >
                    <Title>SELECIONE AS TECNOLOGIAS PARA O PRÓXIMO DESAFIO:</Title>

                </StyledView>
            </StyledView>
        </Background>
    );

}