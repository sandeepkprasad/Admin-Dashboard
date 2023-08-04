import React, { useContext, useEffect, useRef, useState } from "react";
import dashboardContext from "../Context/dashboardContext";
import ProductItem from "./ProductItem";

const AllProducts = () => {
  const { products, getAllProducts, editProduct } =
    useContext(dashboardContext);
  const [product, setProduct] = useState({
    id: "",
    etitle: "",
    edescription: "",
    eimage: "",
    eprice: "",
    eavailable: "",
    ecategory: "",
  });
  const refOpen = useRef(null);
  const refClose = useRef(null);

  useEffect(() => {
    getAllProducts();
    // eslint-disable-next-line
  }, []);

  const updateProduct = (currentProduct) => {
    refOpen.current.click();
    setProduct({
      id: currentProduct._id,
      etitle: currentProduct.title,
      edescription: currentProduct.description,
      eimage: currentProduct.image,
      eprice: currentProduct.price,
      eavailable: currentProduct.available,
      ecategory: currentProduct.category,
    });
  };

  const handleClick = () => {
    editProduct(
      product.id,
      product.etitle,
      product.edescription,
      product.eimage,
      product.eprice,
      product.eavailable,
      product.ecategory
    );
    refClose.current.click();
  };

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  return (
    <>
      <button
        ref={refOpen}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      ></button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Update Product
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="row g-3 bg-light rounded p-2">
                <div className="col-md-4">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    value={product.etitle}
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
                    id="edescription"
                    name="edescription"
                    value={product.edescription}
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
                      id="eimage"
                      name="eimage"
                      value={product.eimage}
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
                    id="ecategory"
                    name="ecategory"
                    value={product.ecategory}
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
                    id="eavailable"
                    name="eavailable"
                    value={product.eavailable}
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
                    id="eprice"
                    name="eprice"
                    value={product.eprice}
                    required
                    onChange={handleChange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                ref={refClose}
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-dark"
                onClick={handleClick}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="container py-3">
          <div className="section-title text-light mb-4">
            <h3 className="fw-bold">All Products</h3>
          </div>
          <div className="row justify-content-center">
            <h6 className="text-light">
              {products.length === 0 && "No Product available"}
            </h6>
            {products &&
              products.map((product) => (
                <ProductItem
                  key={product._id}
                  product={product}
                  updateProduct={updateProduct}
                />
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AllProducts;
