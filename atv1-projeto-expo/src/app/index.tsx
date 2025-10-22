import React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { Alert, Button, ScrollView, Text, View, Image, StyleSheet, TouchableOpacity, Pressable } from "react-native";

const handleOpenGitHub = () => {
    WebBrowser.openBrowserAsync("https://github.com/isabelylemos");
};

const handleTouchableOpacity = () => {
    Alert.alert('Ação', 'TouchableOpacity Pressionado!');
};


const handlePressable = () => {
    Alert.alert('Ação', 'Pressable Pressionado!');
};

export default function Index() {
    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}> 
            <View style={styles.contentWrapper}> 
                <Image source={{ uri: "https://github.com/isabelylemos.png" }} style={styles.avatar} />

                <Text style={styles.nameText}>Isabely Lemos</Text>

                 <Button  title='Abrir Perfil no GitHub' color={"#6474af"}  onPress={(e) => {
                    <Text style={styles.githubButtonText}>Abrir Perfil no GitHub</Text>
                    e.preventDefault();
                    WebBrowser.openBrowserAsync("https://github.com/isabelylemos");
                }}/>

                <View style={styles.separator} />


                <Text style={styles.sectionTitle}>Exemplos de Interação:</Text>
                <Text style={styles.sectionAction}>Pressione:</Text>

                <TouchableOpacity 
                    activeOpacity={0.8} 
                    style={styles.button}
                    onPress={handleTouchableOpacity}
                >
                    <Text style={styles.text}>TouchableOpacity</Text>
                </TouchableOpacity>

                <Text style={styles.sectionAction}>Pressione ou segure:</Text>

                <Pressable 
                    style={({pressed}) => [
                        styles.button,
                        styles.pressable,
                        pressed && styles.pressed
                    ]}
                    onPress={handlePressable}
                    onLongPress={() => Alert.alert('Ação', 'Segurou no botão!')}
                    delayLongPress={1500}
                >
                    <Text style={styles.text}>Pressable</Text>
                </Pressable>

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1, 
        paddingVertical: 40,
        backgroundColor: "#f0f0f0",
    },
    contentWrapper: {
        paddingHorizontal: 32,
        gap: 16,
        alignItems: 'center',
    },

    avatar: {
        width: 100, 
        height: 100, 
        borderRadius: 99
    },
    nameText: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 10,
    },

    githubButton: {
        backgroundColor: "#6474af",
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 15, 
        width: '80%',
        alignItems: 'center',
        marginTop: 8,
    },
    githubButtonText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    
    separator: {
        height: 1,
        width: '100%',
        backgroundColor: '#ccc',
        marginVertical: 20,
    },
    
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
        alignSelf: 'flex-start', 
    },
    sectionAction:  {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#464646ff',
        marginBottom: 2,
        alignSelf: 'flex-start',
    },

    button: {
        backgroundColor: "#359bcaff",
        paddingVertical: 16,
        alignItems: "center",
        borderRadius: 15, 
        width: '100%',
    },
    pressable: {
        backgroundColor: "#f06cb4ff"
    },
    pressed: {
        backgroundColor: '#fdabdbff',
        opacity: 0.9,
    },
    text: {
        color: "#dfdfdf",
        fontSize: 16,
        fontWeight: 'bold',
    },
});