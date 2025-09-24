import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'
import React, { useState } from 'react'
import { Link } from 'expo-router'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import ThemedButton from '../../components/ThemedButton'
import ThemedTextInput from '../../components/ThemedTextInput'
import { useUser } from '../../hooks/useUsers'

const login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { user } = useUser()

    const handleSubmit = () => {
        console.log("current user:", user)
        console.log("Login form submitted", email, password) 
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ThemedView style={styles.container}>

            <Spacer />
            <ThemedText title={true} style={styles.title}>
                Login to your account
            </ThemedText>

            <ThemedTextInput
                placeholder="Email"
                style={{ width: "80%", marginBottom: 20 }}
                keyboardType='email-address'
                onChangeText={setEmail}
                value={email}
            />

            <ThemedTextInput
                placeholder="Password"
                style={{ width: "80%", marginBottom: 20 }}
                onChangeText={setPassword}
                value={password}
                secureTextEntry
            />

            <ThemedButton onPress={handleSubmit}>
                <Text style={{ color: "#f2f2f2" }}>Login</Text>

            </ThemedButton>

            <Spacer height={100} />
            <Link href="/register">
                <ThemedText style={styles.text}>Register instead</ThemedText>
            </Link>

        </ThemedView>
        </TouchableWithoutFeedback>
    )
}

export default login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        textAlign: "center",
        marginBottom: 32
    },
    text: {
        textAlign: "center"
    },
})