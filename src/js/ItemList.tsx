import React from 'react';
import Item from "./Item";
import useTodoStore from "../State/State";

interface ITodoItem {
    id: string,
    isChecked: boolean,
    text: string
}

const ItemList: React.FC = () => {

    const {items, add, remove}: { items: [ITodoItem], add(): void, remove(id: string): void } = useTodoStore(state => state);

    return (
        <div className='wrapper'>
            {items.map((item: ITodoItem) => <Item
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
