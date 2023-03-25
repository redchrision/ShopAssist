// Bibliography: Schwarzmüller M., 2022, React Native - The Practical Guide [2022], https://www.udemy.com/course/react-native-the-practical-guide/

import { createContext, useReducer } from "react";

const DUMMY_ITEMS = [
    {
        id: 'i1',
        description: 'Spaghetti',
        amount: 1,
    },
    {
        id: 'i2',
        description: 'Steak',
        amount: 6,
    },
    {
        id: 'i3',
        description: 'Bread',
        amount: 1,
    },
    {
        id: 'i4',
        description: 'Chips',
        amount: 2,
    },
    {
        id: 'i5',
        description: 'Red wine',
        amount: 7,
    },
]

export const ItemsContext = createContext({
    items: [],
    addItem: ({ description, amount }) => {},
    addExpense: (id) => {},
    updateItem: (id, {description, amount}) => {}
});

function itemsReducer(state, action) {
    switch (action.type) {
        case 'ADD':
            const id = new Date().toString() + Math.random().toString();
            return [{...action.payload, id: id}, ...state]
        case 'UPDATE':
            const updatableItemIndex = state.findIndex(
                (item) => item.id === action.payload.id
            );
            const updatableItem = state[updatableItemIndex];
            const updatedItem = {...updatableItem, ...action.payload.data};
            const updatedItems = [...state];
            updatedItems[updatableItemIndex] = updatedItem;
            return updatedItems;
        case 'DELETE':
            return state.filter((item) => item.id !== action.payload);
        default: 
            return state;
    }
}

function ItemsContextProvider({children}) {
    const [itemsState, dispatch] = useReducer(itemsReducer, DUMMY_ITEMS);

    function addItem(itemData) {
        dispatch({ type: 'ADD', payload: itemData});
    }

    function deleteItem(id) {
        dispatch({ type: 'DELETE', payload: id})
    }

    function updateItem(id, itemData) {
        dispatch ({ type: 'UPDATE', payload: { id: id, data: itemData }});
    }

    const value = {
        items: itemsState,
        addItem: addItem,
        deleteItem: deleteItem,
        updateItem: updateItem
    };

    return <ItemsContext.Provider value={value}>{children}</ItemsContext.Provider>
}

export default ItemsContextProvider;