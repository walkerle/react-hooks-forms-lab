import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {

  // const initialForm = {
  //   name: "",
  //   category: "Produce"
  // }

  const [dataForm, setDataForm] = useState({
    name: "",
    category: "Produce",
  });

  function handleFormChange(e) {
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    onItemFormSubmit({
      id: uuid(),
      ...dataForm
    });
    // setDataForm(initialForm)
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={dataForm.name}
          onChange={handleFormChange}
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={dataForm.category}
          onChange={handleFormChange}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
