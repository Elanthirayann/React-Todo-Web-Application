import React from 'react'
import { FaTrashCan } from "react-icons/fa6";

const LineItem = ({ item, handlecheck, deletebutton }) => {
  return (
    <li className="item">
      <input
        type="checkbox"
        onChange={() => handlecheck(item.id)}
        checked={item.checked}
      />
      <label
        style={item.checked ? { textDecoration: "line-through" } : null}
        onDoubleClick={() => handlecheck(item.id)}
        checked={item.checked}
      >
        {item.item}
      </label>
      <FaTrashCan
        role="button"
        onClick={() => deletebutton(item.id)}
        tabIndex="0"
        aria-label={`Delete ${item.item}`}
      />
    </li>
  );
};

export default LineItem
