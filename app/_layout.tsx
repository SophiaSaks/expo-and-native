import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const RootLayout = () => {
    return (
        <Stack screenOptions={{
            headerStyle: {backgroundColor:'#FDF0E6'},
            headerTintColor: '#49111C'
        }}>
            <Stack.Screen name="index" options={{ title: 'Home' }} />
            <Stack.Screen name="about" options={{ title: 'About' }} />
            <Stack.Screen name="contact" options={{ title: 'Contact'}} />

        </Stack>
    )
}

export default RootLayout

const styles = StyleSheet.create({})