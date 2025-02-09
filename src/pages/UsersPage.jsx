import { useState, useEffect } from "react";
import axios from "axios";

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("Fetching data from API...");

    axios
      .get("http://api.nessieisreal.com/enterprise/customers?key=5fb1952b50e4b486b5d54763ee3f6506")
      .then((response) => {
        console.log("API Response:", response.data);
        
        // Make sure we are correctly extracting users
        if (response.data && response.data.results) {
          setUsers(response.data.results);
          console.log("Extracted Users:", response.data.results);
        } else {
          console.error("No results found in API response.");
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h1>Users Table</h1>
      {users.length === 0 ? (
        <p>No data available</p>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Street</th>
              <th>City</th>
              <th>State</th>
              <th>Zip Code</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.address.street_name}</td>
                <td>{user.address.city}</td>
                <td>{user.address.state}</td>
                <td>{user.address.zip}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UsersPage;
