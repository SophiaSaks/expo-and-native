import { View, ViewProps, useColorScheme } from 'react-native'
import { Colors } from '../constants/Colors'

type ThemedViewProps = ViewProps & {
    style?: ViewProps["style"];
}

const ThemedView: React.FC<ThemedViewProps> = ({ style, ...props }) => {
    const colorScheme = useColorScheme()
    const theme = colorScheme ? Colors[colorScheme] : Colors.light

    return (
        <View style={[{
            backgroundColor: theme.background,
        }, style]}
        {...props}
        />
    )
}

export default ThemedView