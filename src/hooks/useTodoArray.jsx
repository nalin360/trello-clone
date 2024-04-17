import { useState } from 'react';

const useTodoArray = (initialTodos) => {
 const [todos, setTodos] = useState(initialTodos);

 const addTodo = (todo) => {
    setTodos([...todos, todo]);
 };

 const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
 };

 return { todos, addTodo, deleteTodo };
};

export default useTodoArray;
