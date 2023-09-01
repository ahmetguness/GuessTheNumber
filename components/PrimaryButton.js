import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

function PrimaryButton({ children }) {

    function pressHandler() {
        console.log("Pressed!!");
    };

    return (
        <Pressable onPress={pressHandler} android_ripple={{ color: '#640233' }} >
            <View style={styles.container} >
                <Text style={styles.buttonText}>{children}</Text>
            </View>
        </Pressable>
    );
}

export default PrimaryButton;


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#72063c',
        borderRadius: 28,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
        margin: 4,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
    }
});