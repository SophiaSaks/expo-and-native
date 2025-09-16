import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'


const Contact = () => {
    return (
        <View style={styles.container}>
            <Text style={{ marginBottom: 12 }}>Contact Page</Text>

            <Link href="/" style={styles.link}>Home</Link>

        </View>
    )
}

export default Contact

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
