import { useState } from "react";
import { AddCategory, GifGrid } from "./components";
/* import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid"; */

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["one punch"]);

  const handleAddCategory = (newCategory) => {
    //si la categoria ya existe, no lo agrega
    if (categories.includes(newCategory)) {
      alert("ya existe la categoria");
      return;
    }

    //agregar un nuevo elemento al final del arreglo usando spread operator
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      {/* titulo */}
      <h2>Gift Expert App</h2>

      {/* buscador */}
      <AddCategory
        /* setCategories={setCategories}  */
        onNewCategory={(value) => handleAddCategory(value)}
      />

      {/* <button onClick={handleAddCategory}>Agregar</button> */}

      {/* Listado de categorias */}
      {categories.map((category) => (
        /* <li key={category}>{category}</li>; */
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};

export default GifExpertApp;
