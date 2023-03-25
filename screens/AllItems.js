// Bibliography: Schwarzmüller M., 2022, React Native - The Practical Guide [2022], https://www.udemy.com/course/react-native-the-practical-guide/

import { useContext } from 'react';
import ItemsOutput from '../components/ItemsOutput/ItemsOutput';
import { ItemsContext } from '../store/items-context';

function AllItems() {
    const itemsCtx = useContext(ItemsContext);
    return <ItemsOutput items={itemsCtx.items} fallbackText='No registered purchases found.'/>
}

export default AllItems;