const Card = ({ burger }) => {
  if (!burger) {
    return null;
  }

  return (
    <div className="card">
      <h2>{burger.name}</h2>
      <p>{burger.description}</p>
      <p>{burger.location?.address}</p>
      <p>{burger.location?.web}</p>
      {burger.visited ? (
        <div className="visited">Visited</div>
      ) : (
        <div className="not-visited">Not Visited</div>
      )}
    </div>
  );
};

export default Card;
