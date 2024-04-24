import React from 'react';
import { Link } from 'react-router-dom';

const Board = () => {
 // Example data. Replace this with actual data fetching logic.
 const boards = {
    "Board1": { "boardID": 1231 },
    "Board2": { "boardID": 1232 },
    // Add more boards as needed
 };

 return (
    <div>
      <h1>Boards</h1>
      <ul>
        {Object.keys(boards).map((boardId) => (
          <li key={boardId}>
            <Link to={`/dashboard/board/${boardId}`}>{boardId}</Link>
          </li>
        ))}
      </ul>
    </div>
 );
};

export default Board;
