// Bibliography: Schwarzmüller M., 2022, React Native - The Practical Guide [2022], https://www.udemy.com/course/react-native-the-practical-guide/

import { View, Text, StyleSheet } from 'react-native';

import { GlobalStyles } from '../../constants/Styles'

function ItemsSummary({ items, periodName }) {
        // reduce() is a JS method that allows combining the values of an array into a single value (a number, for example)
        const itemsSum = items.reduce((sum, price) => {
            return sum + price.amount
        }, 0);

    return (            
        <View style={styles.container}>
            <Text style={styles.period}>{periodName}</Text>
            <Text style={styles.sum}>${itemsSum}</Text>
        </View>
    );
}

export default ItemsSummary;

const styles = StyleSheet.create({
    container: {
        padding: 8,
        backgroundColor: GlobalStyles.colors.primary50,
        borderRadius: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    period: {
        fontSize: 12,
        color: GlobalStyles.colors.primary400
    },

    sum: {
        fontSize: 16,
        fontWeight: 'bold',
        color: GlobalStyles.colors.primary500,
    }
})