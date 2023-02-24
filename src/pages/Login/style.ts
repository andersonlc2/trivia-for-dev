import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const StyledView = styled.View`
    width: 88%;
    height: 500px;
    margin-top: 172px;
    margin-left: auto;
    margin-right: auto;
`;

export const StyledText = styled.Text`
    color: #878787;
`;

export const StyledInput = styled.TextInput`
    background-color: white;
    color: #000;
    width: 100%;
    border: 1px solid #ddd;
    height: 36px;
`;

export const StyledButton = styled.TouchableOpacity`
    padding: 16px;
    border-radius: 8px;
    width: 30%;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
`;

export const TextButton = styled.Text`
    font-weight: bold;
    color: #fff;
`;

export const GradientBackground = styled(LinearGradient).attrs({
    colors: ['#00FFC2', '#0088FF'],
    start: {x: 0, y: 0},
    end: {x: 1, y: 0},
})`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border-radius: 8px;
`;

export const InputFied = styled.TextInput`
    height: 20px;
`;
