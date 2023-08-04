import React, { useContext, useEffect, useState } from "react";
import dashboardContext from "../Context/dashboardContext";

const AddProduct = () => {
  const { getAllProducts, addProduct } = useContext(dashboardContext);
  const [product, setProduct] = useState({
    title: "",
    description: "",
    image: "",
    category: "",
    available: "",
    price: "",
  });

  useEffect(() => {
    getAllProducts();
    // eslint-disable-next-line
  }, []);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addProduct(
      product.title,
      product.description,
      product.image,
      product.category,
      product.available,
      product.price
    );

    setProduct({
      title: "",
      description: "",
      image: "",
      category: "",
      available: "",
      price: "",
    });
  };

  return (
    <section>
      <div className="container py-3">
        <div className="section-title text-light mb-4">
          <h3 className="fw-bold">Add Products</h3>
        </div>
        <div className="row justify-content-center pt-3 mb-5">
          <div className="col-8 col-md-8">
            <form
              className="row g-3 bg-light rounded p-2"
              onSubmit={handleSubmit}
            >
              <div className="col-md-4">
                <label htmlFor="title" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  value={product.title}
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="description" className="form-label">
                  Description
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  name="description"
                  value={product.description}
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="image" className="form-label">
                  Image URL
                </label>
                <div className="input-group">
                  <span className="input-group-text" id="imageTitle">
                    URL
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="image"
                    name="image"
                    value={product.image}
                    aria-describedby="inputGroupPrepend2"
                    required
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <label htmlFor="category" className="form-label">
                  Categoty
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="category"
                  name="category"
                  value={product.category}
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="col-md-3">
                <label htmlFor="available" className="form-label">
                  Available
                </label>
                <select
                  className="form-select"
                  id="available"
                  name="available"
                  value={product.available}
                  required
                  onChange={handleChange}
                >
                  <option disabled value="">
                    Select
                  </option>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </div>
              <div className="col-md-3">
                <label htmlFor="price" className="form-label">
                  Price
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="price"
                  name="price"
                  value={product.price}
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="col-12">
                <button className="btn btn-dark" type="submit">
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddProduct;
