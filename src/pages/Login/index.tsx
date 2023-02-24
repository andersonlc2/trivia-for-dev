import React from 'react';
import {
    Container,
    InputView,
    StyledText,
    StyledInput,
    StyledButton,
    GradientBackground,
    TextButton,
} from './style';
import {useNavigation} from '@react-navigation/native';
import {propsStack} from '../../routes/Stack/Models';
import Background from '../../components/Background';

export default function Login() {
    const navigation = useNavigation<propsStack>();

    return (
        <Background>
            <Container behavior="padding">
                <InputView>
                    <StyledText>Usuário</StyledText>
                    <StyledInput />
                </InputView>
                <InputView>
                    <StyledText>Senha</StyledText>
                    <StyledInput secureTextEntry={true} />
                </InputView>
                <StyledButton onPress={() => navigation.navigate('Home')}>
                    <GradientBackground />
                    <TextButton>Login</TextButton>
                </StyledButton>
            </Container>
        </Background>
    );
}
