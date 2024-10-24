import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="container mt-3 d-flex justify-content-center">
      <ul
        className="nav nav-pills flex-wrap justify-content-center"
        role="tablist"
      >
        <li className="nav-item">
          <NavLink className="nav-link" to="/stack">
            Stack
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/queue">
            Queue
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/circularQueue">
            Circular Queue
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/priorityQueue">
            priority Queue
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/array">
            Array
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/list">
            Linked List
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
