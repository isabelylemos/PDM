import { router } from "expo-router";
import { Button, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Buttons(){
    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.8} style={styles.button}>
                <Text style={styles.text}>TouchableOpacity</Text>
            </TouchableOpacity>

            <Pressable style={({pressed}) => [
                styles.button,
                styles.pressable,
                pressed && styles.pressed
            ]}
            onPress={() => console.log("Clicou no botão")}
            onLongPress={() => console.warn("Segurou no botão")}
            onPressOut={()=> console.log("Largou do botão")} 
            delayLongPress={2000}>
                <Text style={styles.text}>Pressable</Text>
            </Pressable>

            <TouchableOpacity onPress={() => router.back()}>
                <Text style={styles.backLink}>Voltar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        justifyContent: "center",
        padding: 32,
        gap: 16,
        backgroundColor: "#f0f0f0"
    },
     button: {
        backgroundColor: "#1d1d1d",
        paddingVertical: 16,
        alignItems: "center",
        borderRadius: 8,
    },
    pressable: {
        backgroundColor: "#ff9800"
    },
    pressed: {
        backgroundColor: '#ff9890',
        opacity: 0.9,
    },
    backLink: {
        textAlign: 'center',
        color: '#333',
        marginTop: 16,
    },
    text: {
        color: "#dfdfdf",
        fontSize: 16,
        fontWeight: 'bold',
    },

})