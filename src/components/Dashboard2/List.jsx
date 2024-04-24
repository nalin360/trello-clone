import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const List = () => {
 const { boardId } = useParams();
 const navigate = useNavigate();

 // Example data. Replace this with actual data fetching logic.
 const boards = {
    "Board1": {
      "boardID": 1231,
      "work": {
        "todo": [{ "title": "dsadsad", "content": "dasdasddsad,sdasdasd" }],
        "do": [{ "title": "dsadsad", "content": "dasdasddsad,sdasdasd" }],
        "done": [{ "title": "dsadsad", "content": "dasdasddsad,sdasdasd" }]
      }
    },
    // Add more boards as needed
 };

 const board = boards[boardId];

 if (!board) {
    return <div>Board not found</div>;
 }

 return (
    <div>
      <h2>Board: {boardId}</h2>
      <h3>Todo</h3>
      <ul>
        {board.work.todo.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
      <h3>Do</h3>
      <ul>
        {board.work.do.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
      <h3>Done</h3>
      <ul>
        {board.work.done.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </div>
 );
};

export default List;
