import React from 'react';

import ItemsList from './ItemsList';

const Content = ({ items,handlecheck, deletebutton }) => {
  return (
    <main>
      {items.length ? (
        <ItemsList
          items={items}
          handlecheck={handlecheck}
          deletebutton={deletebutton}
        />
      ) : (
        <p style={{ color: "white" }}>
          "Opportunities don't happen,
          <br />
          -you have to create them."{" "}
        </p>
      )
      }
    </main>
  );
};

export default Content
