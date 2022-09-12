import create from 'zustand';
import {v4 as uuidv4} from 'uuid';


const useTodoStore = create(set => ({
        items: [{isChecked: false, text: '', id: uuidv4()}],
        add: () => set(state => ({
            ...state,
            items: [...state.items, {isChecked: false, text: '', id: uuidv4()}]
        })),
        remove: id => set(state => {
            const items = state.items.filter(i => i.id !== id);
            return {
                ...state,
                items
            }
        }),
        setValue: (id, key, value) => set(state => {
            const index = state.items.findIndex(i => i.id === id);
            const items = state.items;
            items[index] = {...items[index], [key]: value}
            return items;
        })

    }
))

export default useTodoStore;
