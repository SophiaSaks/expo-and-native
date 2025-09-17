import { StyleSheet, Text, View, Image } from 'react-native'
import { Link } from 'expo-router'
import Logo from '../assets/img/clayarooLogo.png'
import ThemedView from '../components/ThemedView'
import ThemedText from '../components/ThemedText'



const Home = () => {
    return (
        <ThemedView style={styles.container}>
            <Image source={Logo} style={styles.img}/>

            <Text style={styles.title}>
                Sophias testapp
            </Text>
            <ThemedText style={{ marginTop: 12, marginBottom: 30 }}>
                Får vi se vad detta blir
            </ThemedText>

            <Link href="/about" style={styles.link}>About page</Link>
             <Link href="/contact" style={styles.link}>Contact page</Link>
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
    title: {
        fontWeight: 'bold',
        fontSize: 18
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
