import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Admin_dashboard.css";

export const Admin_dashboard = () => {
  const [forms, setForms] = useState({ productName: "", productDetails: "", productAmount: "" });
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [isDataFetched, setIsDataFetched] = useState(false);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    if (isDataFetched) return;
    axios
      .get("http://localhost:5000/api/getdata")
      .then((res) => {
        setData(res.data);
        setIsDataFetched(true);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to fetch data");
      });
  }, [isDataFetched]);

  const submitForm = (e) => {
    e.preventDefault();

    if (!forms.productName || !forms.productDetails || !forms.productAmount) {
      setError("All fields are required.");
      return;
    }

    if (editingId) {
      axios
        .put(`http://localhost:5000/api/data/${editingId}`, forms)
        .then((res) => {
          alert(res.data.msg);
          setForms({ productName: "", productDetails: "", productAmount: "" });
          setError("");
          setEditingId(null);
          setIsDataFetched(false);
        })
        .catch((err) => {
          setError("Something went wrong. Please try again.");
        });
    } else {
      axios
        .post("http://localhost:5000/api/data", forms)
        .then((res) => {
          alert(res.data.msg);
          setForms({ productName: "", productDetails: "", productAmount: "" });
          setError("");
          setIsDataFetched(false);
        })
        .catch((err) => {
          setError("Something went wrong. Please try again.");
        });
    }
  };

  const handleChange = (e) => {
    setForms({
      ...forms,
      [e.target.name]: e.target.value,
    });
  };

  const handleEdit = (item) => {
    setForms({
      productName: item.productName,
      productDetails: item.productDetails,
      productAmount: item.productAmount,
    });
    setEditingId(item._id); // Use MongoDB _id field for editing
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/api/data/${id}`)
      .then((res) => {
        alert(res.data.msg);
        setIsDataFetched(false);
      })
      .catch((err) => {
        setError("Something went wrong. Please try again.");
      });
  };

  return (
    <div className="form-container">
      <form onSubmit={submitForm}>
        <label htmlFor="productName">Product Name</label>
        <input
          id="productName"
          name="productName"
          value={forms.productName || ""}
          onChange={handleChange}
          placeholder="Enter product name"
          required
        />

        <label htmlFor="productDetails">Product Details</label>
        <input
          id="productDetails"
          name="productDetails"
          value={forms.productDetails || ""}
          onChange={handleChange}
          placeholder="Enter product details"
          required
        />

        <label htmlFor="productAmount">Product Amount (in Rs)</label>
        <input
          id="productAmount"
          name="productAmount"
          type="number"
          value={forms.productAmount || ""}
          onChange={handleChange}
          required
        />

        {error && <div className="error-message">{error}</div>}

        <button type="submit">{editingId ? "Update" : "Submit"}</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Product Name</th>
            <th>Product Details</th>
            <th>Product Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.productName}</td>
                <td>{item.productDetails}</td>
                <td>{item.productAmount}</td>
                <td>
                  <button onClick={() => handleEdit(item)}>Edit</button>
                  <button onClick={() => handleDelete(item._id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};


export default Admin_dashboard