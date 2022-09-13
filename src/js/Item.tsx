import React from 'react';
import {IconButton, TextField, Checkbox} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import useTodoStore from "../State/State";

interface IItem {
    isChecked: boolean,
    text: string,
    add(): void,
    remove(id: string): void,
    id: string,
    itemsLength: number
}

const Item: React.FC<IItem> = ({isChecked, text, add, remove, id, itemsLength}) => {

    const {setValue}: { setValue(id: string, key: string, value: boolean | string): void } = useTodoStore(state => state);

    const onChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(id, 'isChecked', e.target.checked)
    }

    const onChangeTextField = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(id, 'text', e.target.value)
    }

    return (
        <div className={isChecked ? 'task checked' : 'task'}>
            <div>
                <Checkbox
                    checked={isChecked}
                    disabled={isChecked || text === ''}
                    onChange={onChangeCheckbox}/>
                <TextField
                    label='Add your task'
                    value={text}
                    multiline
                    disabled={isChecked}
                    onChange={onChangeTextField}/>
            </div>
            <div>
                <IconButton
                    onClick={() => add()}>
                    <input hidden accept="image/*" type="file"/>
                    <AddIcon/>
                </IconButton>
                <IconButton
                    disabled={itemsLength === 1}
                    onClick={() => remove(id)}>
                    <input hidden accept="image/*" type="file"/>
                    <RemoveIcon/>
                </IconButton>
            </div>
        </div>
    )
};

export default Item;
