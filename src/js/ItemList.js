import React from 'react';
import Item from "./Item";
import useTodoStore from "../State/State";


const ItemList = () => {

    const {items, add, remove} = useTodoStore(state => state);

    return (
        <div className='wrapper'>
            {items.map(item => <Item
                itemsLength={items.length}
                key={item.id}
                id={item.id}
                isChecked={item.isChecked}
                text={item.text}
                add={add}
                remove={remove}
            />)}
        </div>
    )
}

export default ItemList;
