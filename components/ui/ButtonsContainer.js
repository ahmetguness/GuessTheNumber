import { View, StyleSheet } from "react-native";

function ButtonsContainer({ button1, button2 }) {
    return (
        <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
                {button1}
            </View>
            <View style={styles.buttonContainer}>
                {button2}
            </View>
        </View>
    );
}

export default ButtonsContainer;


const styles = StyleSheet.create({
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    },
});

