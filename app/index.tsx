import { StyleSheet, Text, View, Image } from 'react-native'
import { Link } from 'expo-router'
import Logo from '../assets/img/clayarooLogo.png'


const Home = () => {
    return (
        <View style={styles.container}>
            <Image source={Logo} style={styles.img}/>

            <Text style={styles.title}>
                Sophias testapp
            </Text>
            <Text style={{ marginTop: 12, marginBottom: 30 }}>
                Får vi se vad detta blir
            </Text>

            <Link href="/about" style={styles.link}>About page</Link>
             <Link href="/contact" style={styles.link}>Contact page</Link>
        </View>
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
