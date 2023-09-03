import { Text, View, Image, StyleSheet } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({ roundsNumber, userNumber, onPlayAgain }) {
    return (
        <View style={styles.rootContainer}>
            <Title titleText={"GAME OVER!!"} />
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require("../assets/images/success.png")} />
            </View>
            <Text style={styles.summaryText}>Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text>.</Text>
            <PrimaryButton children="Play Again" onPressFunc={onPlayAgain} />

        </View>
    );
}

export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.primary700,
        overflow: 'hidden',
        margin: 36,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    summaryText: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24,
    },
    highlight: {
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: Colors.primary500,
    },
});