
import React, { useState } from "react";
import "./Navbar.css";
import { Link} from "react-router-dom";


export default function Nav(){
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="container">
      <nav className="navbar bg-dark border-bottom border-body fixed-top bg-body-tertiary pt-4 " data-bs-theme="dark">
      <h3 className="navbar-brand mx-4 text-warning h2" ><span className="badge bg-warning text-dark fs-5 " > News</span> Aggregator </h3>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
        <Link to="/" className="nav-link"> Home </Link>
        </li>
        <li>
        <Link to="/entertainment" className="nav-link"> Entertainment </Link>
        </li>
        <li>
          <Link to="/politics" className="nav-link"> Politics </Link>
        </li>
        <li>
        <Link to="/technology" className="nav-link">Technology</Link>
        </li>
        <li>
        <Link to="/sports" className="nav-link">Sports</Link>
        </li>
      </ul>
      <div className="nav-search d-flex mx-5">
<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
<button className="btn btn-outline-success" type="submit">Search</button>
</div>
<div className="d-grid gap-2 d-md-flex justify-content-md-end mt-2">
    <Link to="/createNews" className="nav-link">
        <button className="btn btn-info me-md-2" type="button">Create News</button>
    </Link>
    <Link to="/profile" className="nav-link">
        <button className="btn btn-info" type="button">profile</button>
    </Link>
</div>
      
    </nav>
    </div>
  );
};
       
