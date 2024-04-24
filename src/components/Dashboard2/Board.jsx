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
      <h2>Boards</h2>
      <ul>
        {Object.keys(boards).map((boardId , index) => (
			<li key={index}>
			  {console.log(boardId)} 
            <Link to={`/dashboard/board/todoboards/${boards[boardId].boardID}`}>{boardId}</Link>
          </li>
        ))}
      </ul>
    </div>
 );
};

export default Board;
