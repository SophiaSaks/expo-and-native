import { Pressable, StyleSheet, PressableProps, StyleProp, ViewStyle} from "react-native"
import { Colors } from "../constants/Colors"

type ThemedButtonProps = Omit<PressableProps, "style"> & {
    style?: StyleProp<ViewStyle>;
}

const ThemedButton: React.FC<ThemedButtonProps>= ({ style, ...props }) => {
    return (

             <Pressable 
            style={({pressed}) => [styles.btn, pressed && styles.pressed, style]} {...props}/>
    )
}

export default ThemedButton

const styles = StyleSheet.create({
    
    btn: {
        backgroundColor: Colors.primary,
        padding: 15,
        borderRadius: 6
    },
    pressed: {
        opacity: 0.8
    }
})