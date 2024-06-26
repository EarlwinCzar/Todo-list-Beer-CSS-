import React, { useEffect, useState } from "react";
import axios from "axios";

function PracticeUseeffect() {
  const [prods, setProds] = useState([]);
  const [isToggled, setToggle] = useState(false);
  const [showProd, setShowProd] = useState([]);

  //  useEffect(() => {
  //    fetch("http://localhost:3000/products") // 1. Declare the fetch request
  //      .then((response) => {
  //        if (!response.ok) {
  //          // 2. Check if the response is ok
  //          throw new Error("Network response was not ok");
  //        }
  //        return response.json(); // 3. Parse the response to JSON
  //      })
  //      .then((data) => setProds(data)) // 4. Update state with the parsed data
  //      .catch((err) => console.log(err)); // 5. Handle any errors
  //  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/products") // 1. Declare the axios request
      .then((res) => setProds(res.data)) // 2. Update state with the parsed response data
      .catch((err) => console.log(err)); // 3. Handle any errors
  }, []);

  const handleShowCategory = (prodCategory) => {
    setToggle(true);
    setShowProd(prods.filter((prod) => prod.category === prodCategory));
  };
  return (
    <div>
      <table className="table">
        <thead className="table-head">
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Price</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {prods.map((prod) => (
            <tr key={prod.id}>
              <td>{prod.id}</td>
              <td>{prod.title}</td>
              <td>{prod.category}</td>
              <td>{prod.price}</td>
              <td>{prod.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <section className="section">
        <article>
          <div>
            <h1>Categories</h1>
            {prods.map((prod) => (
              <button onClick={() => handleShowCategory(prod.category)}>
                {prod.category}
              </button>
            ))}
          </div>
          <div className="category-wrapper">
            {isToggled && (
              <div>
                {showProd.map((prod) => (
                  <div key={prod.id}>
                    <div className="card">
                      <h4>{prod.title}</h4>
                      <p>{prod.category}</p>
                      <p>{prod.price}</p>
                      <p>{prod.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </article>
      </section>
    </div>
  );
}

export default PracticeUseeffect;
