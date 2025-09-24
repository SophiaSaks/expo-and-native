import { TextInput, useColorScheme, TextInputProps } from 'react-native'
import { Colors } from '../constants/Colors'

type ThemedTextInputProps = TextInputProps & {
    style?: TextInputProps["style"]
}

const ThemedTextInput: React.FC<ThemedTextInputProps> = ({ style, ...props }) => {
    const colorScheme = useColorScheme()
    const theme = colorScheme ? Colors[colorScheme] : Colors.light

    return (
        <TextInput 
        style={[
            {
                backgroundColor: theme.uiBackground,
                color: theme.text,
                padding: 20,
                borderRadius: 6
            }, style
        ]}
        {...props}
        />
  )
}

export default ThemedTextInput