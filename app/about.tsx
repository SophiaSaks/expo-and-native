import { StyleSheet, Text, View, Image } from 'react-native'
import { Link } from 'expo-router'


const About = () => {
    return (
        <View style={styles.container}>
            <Text style={{ marginBottom: 12 }}>About Page</Text>

            <Link href="/" style={styles.link}>Home</Link>

        </View>
    )
}

export default About

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    link: {
        borderBottomWidth: 1
    }
})
