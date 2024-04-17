import { Card } from "@material-tailwind/react";
import React from "react";
// import Analytics from '../../pages/Analytics'

import Addnew from "./Addnew";
import Cards from "./Cards";
import { useSelector } from "react-redux";

const List = () => {
  const listItem = useSelector((store) => store.counter.list);
  return (
    <>
      {listItem.map((list) => (
        <div className="p-3 w-1/3" key={list.id}>
          <div className="p-3 bg-gray-200 ">
            <div className="mb-4">{list.title}</div>
            {list?.children?.length > 0 &&
              list.children.map((children) => (
                <Cards key={children.id} cardInfo={children} />
              ))}
            <div className="mt-3">
              <Addnew type="Cards" parentId={list.id} />
            </div>
          </div>
        </div>
      ))}

      <div className="p-3  w-1/3">
        <div className="p-3 bg-gray-200 ">
          <Addnew />
        </div>
      </div>
     
    </>
  );
};

export default List;
