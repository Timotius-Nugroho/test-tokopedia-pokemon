import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";

const Users = () => {
  const [data, setData] = useState([]);
  const [modal, setModal] = useState("online");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        response.json().then((result) => {
          // console.log(result);
          setData(result);
          localStorage.setItem("users", JSON.stringify(result));
        });
      })
      .catch((err) => {
        const dataCache = JSON.parse(localStorage.getItem("users"));
        setData(dataCache);
        setModal("offline");
      });
  }, []);

  // console.log("ASW", modal);

  return (
    <>
      <h1>Users ini {modal === "offline" ? "Your'e in offline mode" : ""}</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {data
            ? data.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                  </tr>
                );
              })
            : ""}
        </tbody>
      </Table>
    </>
  );
};

export default Users;
