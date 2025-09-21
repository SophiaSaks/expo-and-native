import { StyleSheet, Pressable, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import ThemedView from '../../components/ThemedView'
import ThemedText from '../../components/ThemedText'
import Spacer from '../../components/Spacer'
import { Colors } from '../../constants/Colors'
import ThemedButton from '../../components/ThemedButton'

const login = () => {
    const handleSubmit = () => {
        console.log("Login form submitted")

    }

    return (
        <ThemedView style={styles.container}>


            <Spacer />
            <ThemedText title={true} style={styles.title}>
                Login to your account
            </ThemedText>

            <ThemedButton onPress={handleSubmit}>
                <Text style={{ color: "#f2f2f2"}}>Login</Text>

            </ThemedButton>

            <Spacer height={100} /> 
            <Link href="/register">
            <ThemedText style={styles.text}>Register instead</ThemedText>
            </Link>

        </ThemedView>
    )
}

export default login

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"

    },
    title:{
        textAlign: "center",
        marginBottom: 32
    },
    text: {
        textAlign: "center"
    },
})