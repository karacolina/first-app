import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  //para manejar el estado del inout creamos un use state

  const [inputValue, setinputValue] = useState("");

  const handleInputChange = ({ target }) => {
    //como argumento recive el evento desestructurado entre llaves "target" o normal event.target.value
    //dentro de la funcion va el modificador del estado set
    setinputValue(target.value);

    //console para saber lo que trae el input
    //console.log(target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);

    //limpia el input value, solo se ejectura si tiene un valor escrito en el input
    if (inputValue.trim().length <= 1) return;

    // se llama a un callback, con el valor del input y el arreglo anterior para que no se modifique
    //setCategories((categories) => [...categories, inputValue]);

    //se limpia el input luego de escribir y apretar enter
    setinputValue("");

    onNewCategory(inputValue.trim());
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs..."
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
};
