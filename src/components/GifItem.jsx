const GifItem = ({ title, url, id }) => {
  return (
    //siempre debe tener key
    <div className="cards">
      <span>{title}</span>
      <img src={url} width="300px" height="200" alt={title} />
    </div>
  );
};

export default GifItem;
