import { View, Text, TextInput, StyleSheet, Alert } from "react-native";
import { useState } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../constants/colors";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";
import ButtonsContainer from "../components/ui/ButtonsContainer";

function StartGameScreen({ onPickedNumber }) {

    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    };

    function resetInputHandler() {
        setEnteredNumber('');
    };

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredNumber);

        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            return Alert.alert("Invalid number!!", "Number has to be a number between 1 and 99.", [{ text: "Okay", style: 'destructive', onPress: resetInputHandler }])

        }
        onPickedNumber(chosenNumber);
    };

    return (
        <View style={styles.screenContainer}>
            <Title titleText={"Guess My Number"} />
            <Card>
                <InstructionText children={'Enter a number!!'} />
                <TextInput
                    style={styles.numberInput}
                    maxLength={2} keyboardType="number-pad"
                    onChangeText={numberInputHandler}
                    value={enteredNumber}
                />
                <ButtonsContainer
                    button1={<PrimaryButton onPressFunc={resetInputHandler} >Reset</PrimaryButton>}
                    button2={<PrimaryButton onPressFunc={confirmInputHandler} >Confirm</PrimaryButton>}
                />
            </Card>
        </View>
    );
};


export default StartGameScreen;

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center',
    },
    numberInput: {
        height: 50,
        width: 50,
        textAlign: 'center',
        fontSize: 32,
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
    },
});