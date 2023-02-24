import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {KeyboardAvoidingView} from 'react-native';

export const Container = styled(KeyboardAvoidingView)`
    flex: 1;
    gap: 10px;
    align-items: center;
    justify-content: flex-end;
`;

export const InputView = styled.View`
    width: 80%;
    gap: 5px;
`;

export const StyledText = styled.Text`
    color: ${(props: {theme: {BLACK_500: string}}) => props.theme.BLACK_500};
    font-size: 20px;
    align-self: flex-start;
`;

export const StyledInput = styled.TextInput`
    background-color: ${(props: {theme: {GRAY_100: string}}) =>
        props.theme.GRAY_100};
    color: #000;
    width: 100%;
    border: 1px solid #ddd;
    height: 40px;
    padding: 10px;
`;

export const StyledButton = styled.TouchableOpacity`
    padding: 16px;
    border-radius: 8px;
    width: 30%;
    margin: 20px auto;
    align-items: center;
    justify-content: center;
`;

export const TextButton = styled.Text`
    font-weight: bold;
    color: ${(props: {theme: {WHITE: string}}) => props.theme.WHITE};
`;

export const GradientBackground = styled(LinearGradient).attrs({
    colors: ['#92FE9D', '#00C9FF'],
    start: {x: 1, y: 0},
    end: {x: 0, y: 0},
})`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border-radius: 8px;
`;
