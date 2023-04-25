//traer informcion de la api de gifs, peticion HTTP
const getGifs = async (category) => {
    //traer la url con la api key
    const url = `https://api.giphy.com/v1/gifs/search?api_key=GwpkeQrc13quCy596cvN3ZYltigvQEGA&q=${category}&limit=20`;
    //peticion al servicio
    const resp = await fetch(url);

    //dessectructuro la data que viene en el servicio del endpoint (url)
    const { data } = await resp.json();

    //voy a retornar un objeto ()
    const gifs = data.map(({id, title, images}) => ({
      id: id,
      title: title,
      url: images.downsized_medium.url,
    }));

    //voy a ver que hay en la data
    //console.log(gifs);
    return gifs;
  };

  export default getGifs;