import React from "react";
import ReactDOM from "react-dom";

import Badge from "./components/Badge";
import BadgeNew from './pages/BadgeNew'

import "./global.css";
import "bootstrap/dist/css/bootstrap.css";

const container = document.getElementById("app");

ReactDOM.render(
  <BadgeNew/>,
  container
);
