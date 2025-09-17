import { StyleSheet, Text, View, useColorScheme, StatusBar } from 'react-native'
import { Stack } from 'expo-router'
import { Colors } from '../constants/Colors'


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
                    headerStyle: { backgroundColor: theme.navBackground },
                    headerTintColor: theme.text
                }}>
                <Stack.Screen name="index" options={{ title: 'Home' }} />
                <Stack.Screen name="about" options={{ title: 'About' }} />
                <Stack.Screen name="contact" options={{ title: 'Contact' }} />

            </Stack>
        </>
    )
}

export default RootLayout

const styles = StyleSheet.create({})