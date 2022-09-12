import React from 'react';
import {IconButton, TextField, Checkbox} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import useTodoStore from "../State/State";


const Item = ({isChecked, text, add, remove, id, itemsLength}) => {

    const {setValue} = useTodoStore(state => state);

    return (
        <div className={isChecked ? 'task checked' : 'task'}>
            <div>
                <Checkbox
                    checked={isChecked}
                    disabled={isChecked || text===''}
                    onChange={({target: {checked}}) => setValue(id, 'isChecked', checked)}/>
                <TextField
                    label='Add your task'
                    value={text}
                    multiline
                    disabled={isChecked}
                    onChange={({target: {value}}) => setValue(id, 'text', value)}/>
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
}

export default Item
