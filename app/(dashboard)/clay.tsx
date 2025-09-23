import { StyleSheet } from "react-native"
import Spacer from "../../components/Spacer"
import ThemedView from "../../components/ThemedView"
import ThemedText from "../../components/ThemedText"

const Clay = () => {
    return (
        <ThemedView safe={true} style={styles.container}> 
            <ThemedText title={true} style={styles.heading}>
                Your clay projects
            </ThemedText>
   

        </ThemedView>
    )
}

export default Clay

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "stretch"

    },
    heading: {
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center"

    }
})