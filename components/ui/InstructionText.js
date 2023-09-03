import { Text, StyleSheet } from "react-native";

function InstructionText({ children, style }) {
    return <Text style={[stlyes.instructionText, style]} >{children}</Text>;
}


export default InstructionText;

const stlyes = StyleSheet.create({
    instructionText: {
        color: 'white',
        fontSize: 24,

    },
});