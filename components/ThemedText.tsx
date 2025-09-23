import { Text, TextProps, useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors'

type ThemedTextProps = TextProps & {
    style?: TextProps["style"];
    title?: boolean
}

const ThemedText: React.FC<ThemedTextProps> = ({ style, title = false,  ...props }) => {
    const colorScheme = useColorScheme()
    const theme = colorScheme ? Colors[colorScheme] : Colors.light
    const textColor = title ? theme.title : theme.text
    const textSize = title ? 24 : 14

    return (
        <Text style={[{
            color: textColor,
            fontSize: textSize,
        }, style]}
        {...props}
        />
    )
}

export default ThemedText