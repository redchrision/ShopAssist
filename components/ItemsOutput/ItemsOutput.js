// Bibliography: Schwarzmüller M., 2022, React Native - The Practical Guide [2022], https://www.udemy.com/course/react-native-the-practical-guide/

import { View, StyleSheet, Text } from "react-native";
import { GlobalStyles } from "../../constants/Styles";
import ItemsList from "./ItemsList";
import ItemsSummary from "./ItemsSummary";


function ItemsOutput({ items, fallbackText }) {
    let content = <Text style={styles.infoText}>{fallbackText}</Text>

    if (items.length > 0) {
        content = <ItemsList items={items}/>
    }
    
    return (
        <View style={styles.container}>
            <ItemsSummary items={items} />
            {content}
        </View>     
    );
}

export default ItemsOutput;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24, 
        paddingTop: 24, 
        paddingBottom: 0,        
        backgroundColor: GlobalStyles.colors.primary700
    },

    infoText: {
        color: 'white',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 32
    }

})