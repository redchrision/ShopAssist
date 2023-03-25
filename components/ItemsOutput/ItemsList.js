// Bibliography: Schwarzmüller M., 2022, React Native - The Practical Guide [2022], https://www.udemy.com/course/react-native-the-practical-guide/

import { FlatList } from "react-native";
import Item from "./Item";

function renderItemInfo(itemInfo) {
    return <Item {...itemInfo.item}/>

}


function ItemsList({ items }) {
    return <FlatList 
                data= {items} 
                renderItem={renderItemInfo}
                keyExtractor={(item) => item.id}
            />;
}

export default ItemsList;