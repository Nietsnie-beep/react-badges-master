import React from "react";
import Navbar from "../components/NavBar";

import header from '../images/badge-header.svg';
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'

import '../components/styles/BadgeNew.css';

const BadgeNew = (props) => {
  return (
    <div>
      <Navbar />
      <div className="BadgeNew__hero">
        <img src={header} alt="" className="img-fluid" />
      </div>
      <div className="container">
          <div className="row">
              <div className="col">
                  <Badge firstName='Nietsnie'/>
              </div>

              <div className="col-6">
                  <BadgeForm/>
              </div>
          </div>
      </div>
    </div>
  );
};

export default BadgeNew;
