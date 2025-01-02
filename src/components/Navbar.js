import React from 'react'
import { useState } from 'react';

const Navbar = ({ setCategory, setSearchTerm, searchTerm, fetchData }) => {

  return (
    <div>
      <>
        <nav className="navbar navbar-expand-lg  bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">News</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <div className="nav-link" onClick={() => setCategory("business")}>business</div>
                </li>
                <li className="nav-item">
                  <div className="nav-link" onClick={() => setCategory("entertainment")}>entertainment</div>
                </li>
                <li className="nav-item">
                  <div className="nav-link" onClick={() => setCategory("general")}>general</div>
                </li>
                <li className="nav-item">
                  <div className="nav-link" onClick={() => setCategory("health")}>health</div>
                </li>
                <li className="nav-item">
                  <div className="nav-link" onClick={() => setCategory("science")}>science</div>
                </li>
                <li className="nav-item">
                  <div className="nav-link" onClick={() => setCategory("sports")}>sports</div>
                </li>
                <li className="nav-item">
                  <div className="nav-link" onClick={() => setCategory("technology")}>technology</div>
                </li>

              </ul>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search news..."
                />
                <button onClick={() => fetchData()}>Search</button>

            </div>
          </div>
        </nav>
      </>
    </div>
  )
}

export default Navbar
