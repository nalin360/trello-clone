// src/components/AddItemForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, addDo, addDone } from '../features/board/boardSlice';

const AddItemForm = ({ listType }) => {
    const [itemTitle, setItemTitle] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newItem = { title: itemTitle, content: 'New item content' };
        switch (listType) {
            case 'todo':
                dispatch(addTodo(newItem));
                break;
            case 'do':
                dispatch(addDo(newItem));
                break;
            case 'done':
                dispatch(addDone(newItem));
                break;
            default:
                console.error('Invalid list type');
        }
        setItemTitle('');
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col">
            <input
                type="text"
                value={itemTitle}
                onChange={(e) => setItemTitle(e.target.value)}
                placeholder="Add new item"
                className="border-2 border-gray-300 p-2 rounded-md"
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded-md mt-2">
                Add Item
            </button>
        </form>
    );
};

export default AddItemForm;
