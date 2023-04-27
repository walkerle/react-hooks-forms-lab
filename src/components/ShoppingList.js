import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [categorySearch, setCategorySearch] = useState("Search...")

  function handleCategoryChange() {
    // setSelectedCategory(event.target.value);
  }

  function onSearchChange(e) {
    setCategorySearch(e.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  const searchItemsToDisplay = itemsToDisplay.filter((item) => {
    if (categorySearch == "Search...") return true;
    return item.name.toLowerCase().includes(categorySearch.toLowerCase());
  })

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter onCategoryChange={handleCategoryChange} categorySearch={categorySearch} onSearchChange={onSearchChange} />
      <ul className="Items">
        {searchItemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
