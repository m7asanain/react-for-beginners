function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  items = [];

  //   if (items.length === 0) {
  //     return <p>No Items found</p>;
  //   }

  //  this one is cleaner
  const message = items.length === 0 ? <p>No Items found</p> : null;

  return (
    <>
      <h1>List</h1>
      {/* {items.length === 0 ? <p>No Items found</p> : null} */}
      {message}
      <ul className="list-group">
        {items.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
