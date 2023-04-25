import { useEffect, useState } from "react";
import getGifs from "../helpers/getGifs";

const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading ] = useState(true);

    //esta funcion puede ser asincrona
    const getImages = async () => {
      /* cuando obtenga la respuesta traera las iamgenes */
      const newImages = await getGifs(category);
      setImages(newImages);
      setIsLoading(false);
    };
  
    //para llamar las imagenes tengo que llamar a setImages
    useEffect(() => {
      //getGifs(category);
      getImages();
    }, []);


  return {
    //si tenemos una propiedad que apunto a una variable con el mismo nombre se puede dejar solamente el nombre
    images,
    isLoading
  }

}

export default useFetchGifs;
