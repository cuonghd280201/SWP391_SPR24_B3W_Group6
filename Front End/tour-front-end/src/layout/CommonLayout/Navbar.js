import React from "react";

import withRouter from "../../components/withRouter";

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
      <div className="container">
        <a className="navbar-brand" href="index.html">Adventure</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="oi oi-menu" /> Menu
        </button>
        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active"><a href="index.html" className="nav-link">Home</a></li>
            <li className="nav-item"><a href="about.html" className="nav-link">About</a></li>
            <li className="nav-item"><a href="places.html" className="nav-link">Places</a></li>
            <li className="nav-item"><a href="hotel.html" className="nav-link">Hotels</a></li>
            <li className="nav-item"><a href="blog.html" className="nav-link">Blog</a></li>
            <li className="nav-item"><a href="contact.html" className="nav-link">Contact</a></li>
            <li className="nav-item"><a href="/login" className="nav-link">Login</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default withRouter(Navbar);