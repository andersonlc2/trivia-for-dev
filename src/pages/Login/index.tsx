import React from 'react';
import {
    StyledView,
    StyledText,
    StyledInput,
    StyledButton,
    GradientBackground,
    TextButton,
    InputFied,
} from './style';
import {useNavigation} from '@react-navigation/native';
import {propsStack} from '../../routes/Stack/Models';
import Background from '../../components/Background';

export default function Login() {
    const navigation = useNavigation<propsStack>();

    return (
        <Background>
            <StyledView>
                <StyledText>Usuário</StyledText>
                <StyledInput />
                <StyledText>Senha</StyledText>
                <StyledInput secureTextEntry={true} />
                <InputFied />
                <StyledButton
                    color="#00C9FF"
                    onPress={() => navigation.navigate('Home')}>
                    <GradientBackground />
                    <TextButton>Login</TextButton>
                </StyledButton>
            </StyledView>
        </Background>
    );
}
