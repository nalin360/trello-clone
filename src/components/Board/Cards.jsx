import React from "react";

function Cards({cardInfo}) {
  return (
  <div className="bg-white p-2 mt-2 shadow-md rounded-md">{cardInfo.title}</div>
)
}

export default Cards;
