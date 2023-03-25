// Bibliography: Schwarzmüller M., 2022, React Native - The Practical Guide [2022], https://www.udemy.com/course/react-native-the-practical-guide/

import { TextInput, Text, View, StyleSheet } from "react-native";
import { GlobalStyles } from "../../constants/Styles";

function Input ({label, textInputConfig, style, invalid}) {

    const inputStyles = [styles.input];

    if (textInputConfig && textInputConfig.multiline) {
        inputStyles.push(styles.inputMultiline)
    }

    if (invalid) {
        inputStyles.push(styles.invalidInput);
    }

    return <View style={[styles.inputContainer, style]}>
        <Text style={[styles.label, invalid && styles.invalidLabel]}>{label}</Text>
        <TextInput style={inputStyles} {...textInputConfig}></TextInput>
    </View>
}

export default Input;

const styles = StyleSheet.create ({
    inputContainer: {
        marginHorizontal: 4,
        marginVertical: 8
    },

    label: {
        fontSize: 12,
        color: GlobalStyles.colors.primary100,
        marginBottom: 4
    },

    input: {
        backgroundColor: GlobalStyles.colors.primary100, 
        color: GlobalStyles.colors.primary700,
        padding: 6,
        borderRadius: 6,
        fontSize: 18
    },

    inputMultiline: {
        minHeight: 100,
        textAlignVertical: 'top'
    },

    invalidLabel: {
        color: GlobalStyles.colors.error500
    },

    invalidInput: {
        backgroundColor: GlobalStyles.colors.error50
    }
});
