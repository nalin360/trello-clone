import React, { useState } from "react";
import { addList, addCard } from "../../Redux/reducers/userSlice";
import { useDispatch } from "react-redux";
import { log10 } from "chart.js/helpers";
import useTodo from "../../hooks/useTodo";
import useAuth from "../../hooks/useAuth";

const Addnew = ({ type, parentId }) => {
  const [inputVal, setInputVal] = useState("");
  const [isFormVisible, setisFormVisible] = useState(false);
  const { userID } = useAuth();
  console.log(userID);
  const {todos, loading, error, createTodo } = useTodo(userID); // 
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (type) {
      createTodo( inputVal , parentId ); // creating a new todo 
      dispatch(
        addCard({ id: Math.random(), title: inputVal, parentId: parentId })
      );
    } else {
      dispatch(addList({ id: Math.random(), title: inputVal }));
    }
    hideForm();
    // console.log("input val");
    setInputVal("");
  };
  const updateInput = (e) => {
    setInputVal(e.target.value);
  };

  const openForm = () => {
    setisFormVisible(true);
  };

  const hideForm = () => {
    setisFormVisible(false);
  };
  return (
    <div>
      {" "}
      <button onClick={openForm}>+Add {type?"a card":"another list"} </button>
      {isFormVisible && (
        <form onSubmit={submitHandler} className="mt-3">
          <input
            value={inputVal}
            onChange={updateInput}
            className="w-full h-10 p-2"
            placeholder={type ? "Enter Card Name" : "Enter List Name"}
          />
          <div className="mt-3">
            <button onClick={hideForm} className="mr-3">
              Cancel
            </button>
            <button onClick={submitHandler} className=" px-3 py-1 bg-blue-500">
              Save
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Addnew;
