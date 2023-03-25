// Bibliography: Schwarzmüller M., 2022, React Native - The Practical Guide [2022], https://www.udemy.com/course/react-native-the-practical-guide/

import { View, StyleSheet, Text, Alert } from "react-native";
import Input from './Input'
import { useState } from 'react';
import Button from '../UI/Button'
import { GlobalStyles } from "../../constants/Styles";

function ItemForm({onCancel, onSubmit, submitButtonLabel, defaultValues}){
    const [inputs, setInputs] = useState({
        amount: { value: defaultValues ? defaultValues.amount.toString() : '', 
                  isValid: true
                },
        description: { value: defaultValues ? defaultValues.description : '',
                      isValid: true
                },
    });

    function inputChangedHandler(inputIdentifier, enteredValue) {
        setInputs((curInputs) => {
            return {
                ...curInputs,
                [inputIdentifier]: { value: enteredValue, isValid: true}
            }   
        });
    }

    function submitHandler() {
        const itemData ={
            amount: +inputs.amount.value, //the + converts the string into a number
            description: inputs.description.value
        }

        // helper constants
        const amountIsValid = !isNaN(itemData.amount) && itemData.amount > 0;
        const descriptionIsValid = itemData.description.trim().length > 0; // if the description is not empty

        if (!amountIsValid || !descriptionIsValid) {
            // show feedback for the user
            //Alert.alert('Invalid input', 'Please check your input values')
            setInputs((curInputs) => {
                return {
                    amount: { value: curInputs.amount.value, isValid: amountIsValid },
                    description: { value: curInputs.description.value, isValid: descriptionIsValid },
                }
            });
            return; // stop the function execution
        }

        onSubmit(itemData); 
    }

    const fromIsInvalid = !inputs.amount.isValid || !inputs.description.isValid

    return <View style={styles.form}>
        <Text style={styles.title}> Your item </Text>
        <Input 
            label='Amount'
            invalid={!inputs.amount.isValid}
            textInputConfig={{
            keyboardType: 'decimal-pad',
            onChangeText: inputChangedHandler.bind(this, 'amount'),
            value: inputs.amount.value
        }}/>
        <Input 
            label='Description' 
            invalid={!inputs.description.isValid}
            textInputConfig={{
            multiline: true,
            //autoCorrect: false,
            //autoCapitalize: 'none'
            onChangeText: inputChangedHandler.bind(this, 'description'),
            value: inputs.description.value
        }}/>

        {fromIsInvalid && (<Text style={styles.errorText}>Invalid input valus. Please check your input data.</Text>)}

        <View style={styles.buttons}>
                <Button style={styles.button} mode='flat' onPress={onCancel}>Cancel</Button>
                <Button style={styles.button} onPress={submitHandler}>{submitButtonLabel}</Button>
        </View>

    </View>
}

export default ItemForm;   

const styles = StyleSheet.create({
    form: {
        marginTop: 40
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginVertical: 24,
        textAlign: 'center'
    },

    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    button: {
        minWidth: 120,
        marginHorizontal: 8
    },

    errorText: {
        textAlign: 'center',
        color: GlobalStyles.colors.error500,
        margin: 8   
    }
})