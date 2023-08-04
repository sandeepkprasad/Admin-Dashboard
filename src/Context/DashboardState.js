import { useState } from "react";
import dashboardContext from "./dashboardContext";

const DashboardState = (props) => {
  const [products, setProducts] = useState([]);
  const [admin, setAdmin] = useState([]);
  const [alert, setAlert] = useState({ type: "", message: "" });

  const showAlert = (type, message) => {
    setAlert({ type: type, message: message });

    setTimeout(() => {
      showAlert();
    }, 3000);
  };

  const getAllProducts = async () => {
    let url = "https://storebackend-l0fx.onrender.com/products/getproducts";
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authtoken: localStorage.getItem("token"),
      },
    });

    const json = await response.json();
    setProducts(json);
  };

  const getAdmin = async () => {
    let url = "https://storebackend-l0fx.onrender.com/admin/getadmin";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authtoken: localStorage.getItem("token"),
      },
    });

    const json = await response.json();
    setAdmin(json);
  };

  const addProduct = async (
    title,
    description,
    image,
    category,
    available,
    price
  ) => {
    let url = "https://storebackend-l0fx.onrender.com/products/addproduct";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authtoken: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        title,
        description,
        image,
        category,
        available,
        price,
      }),
    });

    const product = await response.json();
    setProducts(products.concat(product));
    showAlert("success", "Product Added");
  };

  const deleteProduct = async (id) => {
    let url = `https://storebackend-l0fx.onrender.com/products/deleteproduct/${id}`;
    const response = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authtoken: localStorage.getItem("token"),
      },
    });

    const json = await response.json();
    console.log(json);

    const newProducts = await products.filter((product) => {
      return product._id !== id;
    });
    setProducts(newProducts);
    showAlert("danger", "Product Deleted");
  };

  const editProduct = async (
    id,
    title,
    description,
    image,
    price,
    available,
    category
  ) => {
    let url = `https://storebackend-l0fx.onrender.com/products/updateproduct/${id}`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authtoken: localStorage.getItem("token"),
      },
      body: JSON.stringify({
        title,
        description,
        image,
        price,
        available,
        category,
      }),
    });

    const json = await response.json();
    console.log(json);
    showAlert("success", "Product Updated");

    const newProducts = JSON.parse(JSON.stringify(products));
    for (let i = 0; i < products.length; i++) {
      const element = products[i];
      if (element._id === id) {
        newProducts[i].title = title;
        newProducts[i].description = description;
        newProducts[i].image = image;
        newProducts[i].price = price;
        newProducts[i].available = available;
        newProducts[i].category = category;
        break;
      }
    }
    setProducts(newProducts);
  };
  return (
    <dashboardContext.Provider
      value={{
        products,
        getAllProducts,
        addProduct,
        deleteProduct,
        editProduct,
        getAdmin,
        admin,
        alert,
        showAlert,
      }}
    >
      {props.children}
    </dashboardContext.Provider>
  );
};

export default DashboardState;
