import React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { Alert, Button, ScrollView, Text, View, Image, StyleSheet, TouchableOpacity, Pressable } from "react-native";


const handleOpenGitHub = () => {
    // e.preventDefault() não é necessário em onPress do React Native
    WebBrowser.openBrowserAsync("https://github.com/isabelylemos");
};

// Handlers para os botões de exemplo (TouchableOpacity e Pressable)
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

                {/* Pressable - maior controle e funcionalidades */}
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

                {/* O botão "Voltar" (router.back()) foi removido pois esta é a tela inicial */}
            </View>
        </ScrollView>
    );
}

// ------------------------------------------------------------------
// ESTILOS COMBINADOS
// ------------------------------------------------------------------

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1, 
        paddingVertical: 40,
        backgroundColor: "#f0f0f0",
    },
    contentWrapper: {
        paddingHorizontal: 32,
        gap: 16,
        alignItems: 'center', // Centraliza o conteúdo horizontalmente
    },

    // ESTILOS DE PERFIL
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

    // ESTILO DO NOVO BOTÃO GITHUB (Com a sua cor #6474af e borderRadius)
    githubButton: {
        backgroundColor: "#6474af",
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 15, // Arredondamento
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
    
    // ESTILOS DA SEÇÃO DE EXEMPLOS DE BOTÕES
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
        alignSelf: 'flex-start', // Alinha o título à esquerda
    },
    sectionAction:  {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#464646ff',
        marginBottom: 2,
        alignSelf: 'flex-start', // Alinha o título à esquerda
    },

    button: {
        backgroundColor: "#359bcaff",
        paddingVertical: 16,
        alignItems: "center",
        borderRadius: 15, // Arredondamento para os botões de exemplo
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
    // Removido styles.backLink pois o botão "Voltar" foi removido
});