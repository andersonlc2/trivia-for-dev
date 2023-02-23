import React from 'react';
import styled from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { propsStack } from '../../routes/Stack/Models';
import Background from '../../components/Background';

export default function Login() {
    const navigation = useNavigation<propsStack>();
    
    const StyledView = styled.View`
        width: 88%;
        height: 500px;
        margin-top: 172px;
        margin-left: auto;
        margin-right: auto;
    `;

    const StyledText = styled.Text`
        color  : #878787;
    `;

    const StyledInput = styled.TextInput`
        background-color: white;
        color: #000;
        width: 100%;
        border: 1px solid #ddd;
        height: 36px;
    `;

    const StyledButton = styled.Button`
        background-color: #00C9FF;
    `;

    const InputFied = styled.TextInput`
        height: 20px;
    `;

    return (
        <Background>
            <StyledView>
                <StyledText>Usuário</StyledText>
                <StyledInput />
                <StyledText>Senha</StyledText>
                <StyledInput secureTextEntry={true} />
                <InputFied />
                <StyledButton 
                    title="Login" 
                    color="#00C9FF"
                    onPress={() => navigation.navigate("Home")} />
            </StyledView>
        </Background>
    );

}