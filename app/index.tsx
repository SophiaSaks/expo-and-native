import { StyleSheet, Text, View, Image } from 'react-native'
import { Link } from 'expo-router'
import Logo from '../assets/img/clayarooLogo.png'
import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'
import ThemedCard from '../components/ThemedCard'
import Spacer from '../components/Spacer'




const Home = () => {
    return (
        <ThemedView style={styles.container}>
            <Image source={Logo} style={styles.img} />
            <ThemedCard>

                <ThemedText title={true}>
                    Sophias testapp
                </ThemedText>
                <ThemedText style={{ marginTop: 12, marginBottom: 30 }}>
                    Får vi se vad detta blir
                </ThemedText>
            </ThemedCard>
            <Spacer />

            <Link href="/login" style={styles.link}>Login</Link>
            <Spacer height={12} />
            <Link href="/register" style={styles.link}>Register</Link>
            <Link href="/profile" style={styles.link}>Profile Page</Link>

        </ThemedView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    img: {
        marginVertical: 12,
        width: 200,
        height: 210
    },
    link: {
        borderBottomWidth: 1
    }
})
