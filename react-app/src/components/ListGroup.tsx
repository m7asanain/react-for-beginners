import { MouseEvent } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const message = items.length === 0 && <p>No Items found</p>;

  const handelClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List</h1>
      {message}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            // onClick={() => console.log(item, index)}
            onClick={handelClick}
            className="list-group-item"
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
