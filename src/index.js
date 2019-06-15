import React from "react";
import ReactDOM from "react-dom";
import List from "./js/components/container/List.jsx"
// import FormContainer from "./js/components/container/FormContainer.jsx";

const Wrapper = document.getElementById("create-article-form");
Wrapper ? ReactDOM.render(<List/>, Wrapper) : false;

require("./examples");