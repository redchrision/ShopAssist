// Bibliography: Schwarzmüller M., 2022, React Native - The Practical Guide [2022], https://www.udemy.com/course/react-native-the-practical-guide/

import { useLayoutEffect, useContext } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import ItemForm from '../components/ItemManager/ItemForm';
import IconButton from '../components/UI/IconButton';
import { GlobalStyles } from '../constants/Styles';
import { ItemsContext } from '../store/items-context';

function ItemManager({ route, navigation }) {
    const itemsCtx = useContext(ItemsContext);

    const editedItemId = route.params?.itemId;
    const isEditing = !!editedItemId; // this converts the value into a boolean'

    const selectedItem = itemsCtx.items.find(item => item.id === editedItemId);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEditing ? 'Edit Item' : 'Add Item'
        })
    }, [navigation, isEditing])

    function deleteItemHandler(){
        navigation.goBack();
        itemsCtx.deleteItem(editedItemId);
    }

    function cancelHandler(){
        navigation.goBack();
    }

    function confirmHandler(itemData){
        if (isEditing) {
            itemsCtx.updateItem(editedItemId, itemData);  
        } else {
            itemsCtx.addItem(itemData);
        }
        navigation.goBack();
    }

    return ( 
        <View style={styles.container}>
            <ItemForm 
                submitButtonLabel={isEditing ? 'Update' : 'Add'}
                onSubmit={confirmHandler} 
                onCancel={cancelHandler} 
                defaultValues={selectedItem}
            />

            {isEditing && (
                    <View style={styles.deleteContainer}>
                        <IconButton 
                            icon='trash' 
                            color={GlobalStyles.colors.error500} 
                            size={24} 
                            onPress={deleteItemHandler}
                        />
                    </View>
                )}
        </View>
    )
}

export default ItemManager;

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary800
    },
    
    deleteContainer:{
        marginTop: 16,
        paddingTop: 8,
        borderTopWidth: 2,
        borderTopColor: GlobalStyles.colors.primary200,
        alignItems: 'center'
    }
})