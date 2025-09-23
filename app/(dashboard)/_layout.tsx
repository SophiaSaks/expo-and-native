import { Tabs } from "expo-router"
import { useColorScheme } from "react-native"
import { Colors } from "../../constants/Colors"
import { Ionicons } from "@expo/vector-icons"



const DashboardLayout = () => {
    const colorScheme = useColorScheme()
    const theme = colorScheme ? Colors[colorScheme] : Colors.light

    return (
        <Tabs
            screenOptions={{
                headerShown: false, tabBarStyle: {
                    backgroundColor: theme.navBackground,
                    padding: 10,
                    height: 120

                },
                tabBarActiveTintColor: theme.iconColorFocused,
                tabBarInactiveTintColor: theme.iconColor

            }}
        >
            <Tabs.Screen 
            name="profile" 
            options={{title: "Profile", tabBarIcon: ({focused}) =>(
                <Ionicons 
                size={28}
                name={focused ? "person" : "person-outline"}
                color={focused ? theme.iconColorFocused : theme.iconColor}/>
            ) }} />

            <Tabs.Screen 
            name="clay" 
             options={{title: "Clay", tabBarIcon: ({focused}) =>(
                <Ionicons 
                size={28}
                name={focused ? "brush" : "brush-outline"}
                color={focused ? theme.iconColorFocused : theme.iconColor}/>
            ) }} />

            <Tabs.Screen 
            name="create" 
               options={{title: "Create", tabBarIcon: ({focused}) =>(
                <Ionicons 
                size={28}
                name={focused ? "create" : "create-outline"}
                color={focused ? theme.iconColorFocused : theme.iconColor}/>
            ) }} />

        </Tabs>

    )
}

export default DashboardLayout