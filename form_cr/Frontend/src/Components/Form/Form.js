import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Form.css";

export const Forms = () => {
  const [forms, setForms] = useState({});
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [isDataFetched, setIsDataFetched] = useState(false); 

  useEffect(() => {
    if (isDataFetched) return; 
    axios
      .get("http://localhost:4000/api/getdata")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setIsDataFetched(true);
      })
      .catch((err) => {
        console.error(err);
      });
  }, [isDataFetched]); 

  const submitform = (e) => {
    e.preventDefault();

    
    if (!forms.name || !forms.dob || !forms.email) {
      setError("All fields are required.");
      return;
    }

    
    axios
      .post("http://localhost:4000/api/data", forms)
      .then((res) => {
        console.log(res);
        alert(res.data.msg); 
        setForms({ name: "", dob: "", email: "" });
        setError(""); 
      })
      .catch((err) => {
        console.log(err);
        setError("Something went wrong. Please try again.");
      });
  };

 
  const Changefn = (e) => {
    setForms({
      ...forms,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={submitform}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          value={forms.name || ""}
          onChange={Changefn}
          placeholder="Enter your name"
          pattern="^[A-Za-z\s]+$" 
          title="Only alphabets and spaces are allowed" 
          required 
        />

        <label htmlFor="dob">DOB</label>
        <input
          id="dob"
          name="dob"
          type="date"
          value={forms.dob || ""}
          onChange={Changefn}
          max="2007-01-01"
          required
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={forms.email || ""}
          onChange={Changefn}
          placeholder="Enter your email"
          title="Please enter a valid email address (e.g., example@example.com)"
          required 
        />

        {error && <div className="error-message">{error}</div>}

        <button type="submit">Submit</button>
        <button
          onClick={() => {
            window.location.reload();
          }}
        >
          Display
        </button>
      </form>

      <br />
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Name</th>
            <th>DOB</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.dob}</td>
                <td>{item.email}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};