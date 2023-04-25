//import { useEffect, useState } from "react";

import GifItem from "./GifItem";
import useFetchGifs from "../hooks/useFetchGifs";
// import getGifs from "../helpers/getGifs"; //refactorizado a custom hook useFetchGifts

export const GifGrid = ({ category }) => {
  //estado inicial para preservar las imagenes, se va a inicializar con un arreglo vacio, tabmien peude ser false o null
  /* const [images, setImages] = useState([]); */

  const { images, isLoading } = useFetchGifs(category);

  //esta funcion puede ser asincrona
  /*   const getImages = async () => {
    /* cuando obtenga la respuesta traera las iamgenes */
  /*     const newImages = await getGifs(category);
    setImages(newImages); 
  }; */

  //para llamar las imagenes tengo que llamar a setImages
  /*   useEffect(() => {
    //traer informcion de la api de gifs, peticion HTTP
    getGifs(category);
    getImages();
  }, []); // [] arreglo vacio, este hook se disparara solo una vez */

  return (
    <>
      <h3>{category}</h3>

      {
        isLoading && <p>Cargando....</p> //si isLoading es verdadero muetra el mensaje
      }

      {/* para traer todas las imagenes tengo que hacer un map de images, que es mi estado inicial ( images.map ) */}
      <div className="list-cards">
        {images.map((image) => (
          // retorno implicito del objeto, solo con parentetis
          <GifItem key={image.id} title={image.title} url={image.url} />
        ))}
      </div>
    </>
  );
};
