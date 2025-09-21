import { StyleSheet, useColorScheme, StatusBar } from 'react-native'
import { Stack } from 'expo-router'
import { Colors } from '../../constants/Colors'


const RootLayout = () => {
    const colorScheme = useColorScheme();
    const theme = colorScheme ? Colors[colorScheme] : Colors.light

    return (
        <>
            <StatusBar
                barStyle={colorScheme === "dark" ? "light-content" : "dark-content"}
            />
            <Stack
                screenOptions={{
                    headerShown: false,
                    animation: "none"
                }} />
        </>
    )
}

export default RootLayout

const styles = StyleSheet.create({})