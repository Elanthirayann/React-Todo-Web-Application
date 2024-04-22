import React from 'react'
import LineItem from './LineItem';

const ItemsList = ({items,handlecheck,deletebutton}) => {
  return (
    <ul>
      {items.map((item) => (
        <LineItem
          item={item}
          key={item.id}
          handlecheck={handlecheck}
          deletebutton={deletebutton}
        />
      ))}
    </ul>
  );
}

export default ItemsList
