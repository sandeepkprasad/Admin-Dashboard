import React, { useContext } from "react";
import dashboardContext from "../Context/dashboardContext";

const ProductItem = (props) => {
  const { deleteProduct } = useContext(dashboardContext);
  const { _id, title, description, image, price, available } = props.product;

  return (
    <div className="col-5 col-md-3 mb-3">
      <div className="card">
        <img height={200} src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h6 className="card-title fw-bold">{title.slice(0, 25)}</h6>
          <p className="card-text text-muted">{description.slice(0, 70)}</p>
          <h6 className="card-title fw-bold">Price : ₹{price}</h6>
          <span className={`badge text-bg-${available ? "success" : "danger"}`}>
            {available ? "In Stock" : "Out Stock"}
          </span>
          <div className="d-flex justify-content-around pt-3">
            <button
              type="button"
              className="btn btn-sm btn-outline-secondary"
              onClick={() => {
                props.updateProduct(props.product);
              }}
            >
              Update
            </button>
            <button
              type="button"
              className="btn btn-sm btn-outline-danger"
              onClick={() => deleteProduct(_id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
