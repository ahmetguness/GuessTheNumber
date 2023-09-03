import { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import ButtonsContainer from "../components/ui/ButtonsContainer";
import GuessLogItem from "../components/game/GuessLogItem";

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {

    const initialGuess = generateRandomBetween(1, 100, userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess]);

    useEffect(() => {
        if (currentGuess == userNumber) {
            onGameOver(guessRounds.length);
        }
    }, [currentGuess, userNumber, onGameOver])

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, [])

    function nextGuessHandler(direction) {

        if ((direction == 'lower' && currentGuess < userNumber) || (direction == 'greater' && currentGuess > userNumber)) {
            Alert.alert("Don't lie", "You know this is wrong", [{ text: "Sorry!!", style: 'cancel' }]);
            return;
        }

        if (direction == 'lower') {
            maxBoundary = currentGuess;
        }
        else {
            minBoundary = currentGuess + 1;
        }
        console.log(maxBoundary, minBoundary);
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber);
        setGuessRounds(prevGuessRounds => [newRndNumber, ...prevGuessRounds])
    };

    const guessRoundsListLenght = guessRounds.length;

    return <View style={styles.screen}>
        <Title titleText={"Opponent's Guess"} />
        <NumberContainer children={currentGuess} />
        <Card>
            <InstructionText children={'Higher or lower?'} style={styles.instructionText} />
            <ButtonsContainer
                button1={<PrimaryButton children={<Ionicons name="md-remove" size={24} color={'white'} />} onPressFunc={nextGuessHandler.bind(this, 'lower')} ></PrimaryButton>}
                button2={<PrimaryButton children={<Ionicons name="md-add" size={24} color={'white'} />} onPressFunc={nextGuessHandler.bind(this, 'greater')} ></PrimaryButton>} />
        </Card>
        <View style={styles.listContainer}>
            {/* {guessRounds.map(guessRound => <Text key={guessRound} >{guessRound}</Text>)} */}
            <FlatList data={guessRounds} renderItem={(itemData) => <GuessLogItem roundNumber={guessRoundsListLenght - itemData.index} guess={itemData.item} />} keyExtractor={(item) => item} />
        </View>
    </View>
}


export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    },
    instructionText: {
        marginBottom: 12,
    },
    listContainer: {
        flex: 1,
        padding: 16,
    }
});