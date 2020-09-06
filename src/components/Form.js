import React from "react";

export default function Form() {
  return (
    <form>
      <input type="text" className="todo-input" />
      <button className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
    </form>
  );
}
// onClick={()=>}
// onChange={()=>}
