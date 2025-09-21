import { View, ViewProps, useColorScheme, StyleSheet } from 'react-native'
import { Colors } from '../constants/Colors'

type ThemedCardProps = ViewProps & {
    style?: ViewProps["style"];
}

const ThemedCard: React.FC<ThemedCardProps> = ({ style, ...props }) => {
    const colorScheme = useColorScheme()
    const theme = colorScheme ? Colors[colorScheme] : Colors.light

    return (
        <View style={[{
            backgroundColor: theme.uiBackground
        }, styles.card, style]}
        {...props}
        />
    )
}

export default ThemedCard

const styles = StyleSheet.create({
    card: {
        borderRadius: 8,
        padding: 18,
        margin: 12
    }

})