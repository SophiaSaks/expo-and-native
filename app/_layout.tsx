import { StyleSheet, useColorScheme, StatusBar } from 'react-native'
import { Stack } from 'expo-router'
import { Colors } from '../constants/Colors'
import { UserProvider } from '../contexts/UserContext';


const RootLayout = () => {
    const colorScheme = useColorScheme();
    const theme = colorScheme ? Colors[colorScheme] : Colors.light

    return (
        <UserProvider>
            <StatusBar
                barStyle={colorScheme === "dark" ? "light-content" : "dark-content"}
            />
            <Stack
                screenOptions={{
                    headerStyle: { backgroundColor: theme.navBackground },
                    headerTintColor: theme.text
                }}>
                <Stack.Screen name="index" options={{ title: 'Home' }} />
                <Stack.Screen name="(auth)" options={{ headerShown: false }} />
                <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />



            </Stack>
        </UserProvider>
    )
}

export default RootLayout

const styles = StyleSheet.create({})