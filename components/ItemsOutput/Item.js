// Bibliography: Schwarzmüller M., 2022, React Native - The Practical Guide [2022], https://www.udemy.com/course/react-native-the-practical-guide/

import { Pressable, View, Text, StyleSheet } from "react-native";

import { GlobalStyles } from "../../constants/Styles";

import { useNavigation } from '@react-navigation/native';


function Item({ id, description, amount }) {
    const navigation = useNavigation();

    function itemPressHandler() {
        navigation.navigate('Item Manager', {
            itemId: id
        });
    }
    return <Pressable 
                onPress={itemPressHandler}
                style={({pressed}) => pressed && styles.pressed}
            >
        <View style={styles.expenseItem}>
            <View style={styles.textContainer}>
                <Text style={[styles.textBase, styles.description]}>{description}</Text>
            </View>
            <View style={styles.amountContainer}>
                <Text style={styles.amount}>{amount.toFixed(2)}</Text>
            </View>
        </View>

    </Pressable>
}

export default Item;

const styles = StyleSheet.create({
    expenseItem: {
        padding: 12,
        marginVertical: 8,
        backgroundColor: GlobalStyles.colors.primary500,
        flexDirection: 'row',
        justyfyContent: 'space-between',
        borderRadius: 6,
        elevation: 3,
        showdowColor: GlobalStyles.colors.gray500,
        shadowRadius: 4,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4
    },

    textBase: {
        color: GlobalStyles.colors.primary50
    },

    description: {
        fontSize: 16,
        marginBottom: 4,
        fontWeight: 'bold',
    },

    amountContainer: {
        paddingHorizontal: 12,
        paddingVertical: 4, 
        backgroundColor: 'white',
        borderRadius: 4, 
        minWidth: 80,
        justifyContent: 'center',
        alignItems: 'center'
    },

    amount: {
        color: GlobalStyles.colors.primary500,
        fontWeight: 'bold'
    },

    pressed: {
        opacity: 0.75,
    },

    textContainer: {
        width: '70%', //flexbox allignment is not working
    }
})