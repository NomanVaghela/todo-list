import React, { useEffect } from "react";
import todo from "../image/todo.svg";
import "../App.css";
import { useState } from "react";

const Todo = () => {
  const [updateData, setupdateData] = useState();

  const [item, setItem] = useState([]);

  const addItem = () => {
    if (!updateData) {
    } else {
      setItem([...item, updateData]);
      setupdateData("");
    }
  };
  const deleteItem = (id) => {
    const updateditem = item.filter((elem, ind) => {
      return ind !== id;
    });
    setItem(updateditem);
  };
  const removeAll = () => {
    setItem([]);
  };

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src={todo} alt="todologo" />
            <figcaption>Add Your List Here</figcaption>
          </figure>
          <div className="addItem">
            <input
              type="text"
              placeholder="Add Items..."
              onChange={(e) => {
                setupdateData(e.target.value);
              }}
              value={updateData}
            />
            <i
              className="fa fa-plus add-btn"
              title="Add Item"
              onClick={addItem}
            ></i>
          </div>
          <div className="showItems">
            {item.map((elem, ind) => {
              return (
                <div className="eachItem" key={ind}>
                  <h3>{elem}</h3>
                  <i
                    className="far fa-trash-alt add-btn"
                    title="Delete Item"
                    onClick={() => deleteItem(ind)}
                  ></i>
                </div>
              );
            })}
          </div>
          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
              onClick={removeAll}
            >
              <span>CHECK LIST</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
